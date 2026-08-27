export const isAppleMobileDevice = (
  userAgent?: string,
  maxTouchPoints?: number,
): boolean => {
  const ua =
    userAgent ?? (typeof navigator !== "undefined" ? navigator.userAgent : "");
  const touchPoints =
    typeof maxTouchPoints === "number"
      ? maxTouchPoints
      : typeof navigator !== "undefined"
        ? (navigator.maxTouchPoints ?? 0)
        : 0;

  return (
    /(iPhone|iPad|iPod)/i.test(ua) ||
    (/(Macintosh|MacIntel)/i.test(ua) && touchPoints > 1)
  );
};

export const getCompatibleVideoUrl = (
  url: string,
  isAppleMobile = false,
): string => {
  if (!url || !isAppleMobile) return url;

  if (/\.webm(?=$|[?#])/i.test(url)) {
    return url.replace(/\.webm(?=$|[?#])/i, ".mp4");
  }

  return url;
};
