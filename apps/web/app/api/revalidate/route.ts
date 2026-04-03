import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const envToken = process.env.REVALIDATE_TOKEN;
  if (!envToken) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const token = request.headers.get('x-revalidate-token');
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let tokenValid = false;
  try {
    const a = Buffer.from(token);
    const b = Buffer.from(envToken);
    tokenValid = a.length === b.length && timingSafeEqual(a, b);
  } catch {
    tokenValid = false;
  }

  if (!tokenValid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    revalidateTag('servers');
  } catch (err) {
    console.error('Revalidation failed:', err);
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 });
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
