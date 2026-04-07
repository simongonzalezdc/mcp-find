const AUTHOR_AVATARS: Record<string, string> = {
  "Adam Bush": "/authors/adam.png",
  "Gus Marquez": "/authors/gus.png",
};

export function getAuthorAvatar(name: string): string | null {
  return AUTHOR_AVATARS[name] || null;
}
