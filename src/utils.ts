// is there a better way to get link text?
export function path2linkText(path: string): string {
  return path.replace(/\.md$/, "").replace(/.*\//, "");
}

// Remove block reference. e.g. `[[somefile#^7e8e5f]]`
export function removeBlockReference(src: string): string {
  return src.replace(/#.*$/, "");
}

export function buildRegExpTest(
  pattern: string,
  fallback: boolean
): (s: string) => boolean {
  if (pattern === "") {
    return () => fallback;
  }
  try {
    const regexp = new RegExp(pattern);
    return (s: string) => regexp.test(s);
  } catch {
    return () => fallback;
  }
}
