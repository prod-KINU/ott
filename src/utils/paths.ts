const base = import.meta.env.BASE_URL;

export function withBase(path: string) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }

  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (!cleanBase) return cleanPath;
  if (cleanPath === '/') return `${cleanBase}/`;
  return `${cleanBase}${cleanPath}`;
}

export function withoutBase(pathname: string) {
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  if (!cleanBase || cleanBase === '/') return pathname;
  if (pathname === cleanBase) return '/';
  if (pathname.startsWith(`${cleanBase}/`)) return pathname.slice(cleanBase.length);
  return pathname;
}
