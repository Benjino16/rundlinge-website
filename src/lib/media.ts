const BASE = import.meta.env.PUBLIC_MEDIA_URL ?? "";

export function mediaUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${normalizedPath}`;
}
