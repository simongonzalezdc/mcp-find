/**
 * One-time migration script to re-categorize servers currently in "other".
 *
 * The categorizer only processes servers where category IS NULL.
 * This script resets "other" servers to NULL, then re-runs categorization
 * with the expanded keyword set.
 *
 * Usage: npx tsx packages/sync/src/recategorize-other.ts
 */
import { createClient } from '@supabase/supabase-js';
import { categorizeServers } from './categorizer';

async function main() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // Count current "other" servers
  const { count } = await supabase
    .from('servers')
    .select('*', { count: 'exact', head: true })
    .eq('category', 'other');

  console.log(`Found ${count ?? 0} servers currently in "other"`);

  if (!count || count === 0) {
    console.log('Nothing to recategorize.');
    return;
  }

  // Reset "other" servers to NULL so the categorizer picks them up
  const { error: resetError } = await supabase
    .from('servers')
    .update({ category: null })
    .eq('category', 'other');

  if (resetError) {
    console.error('Failed to reset categories:', resetError.message);
    process.exit(1);
  }

  console.log(`Reset ${count} servers to NULL. Running categorizer...`);

  // Re-categorize with expanded keyword set
  const categorized = await categorizeServers(supabase);
  console.log(`Categorized ${categorized} servers into new categories.`);

  // Check how many are still "other"
  const { count: remaining } = await supabase
    .from('servers')
    .select('*', { count: 'exact', head: true })
    .eq('category', 'other');

  console.log(`${remaining ?? 0} servers remain in "other" after recategorization.`);
}

main().catch((err) => {
  console.error('Recategorization failed:', err);
  process.exit(1);
});
