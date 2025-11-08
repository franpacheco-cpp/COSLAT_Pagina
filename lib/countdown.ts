const target = new Date('2025-11-25T19:00:00');

export function daysUntilTarget(now = new Date()): number | null {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return null;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function targetDate(): Date {
  return new Date(target);
}
