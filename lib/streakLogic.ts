export function calculateStreak(dates: string[]) {

  if (dates.length === 0) {
    return {
      streak: 0,
      total: 0,
      lastDate: null
    };
  }

  const sorted = dates.sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  let streak = 1;

  for (let i = 1; i < sorted.length; i++) {

    const prev = new Date(sorted[i - 1]);
    const curr = new Date(sorted[i]);

    const diff =
      (prev.getTime() - curr.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return {
    streak,
    total: dates.length,
    lastDate: sorted[0]
  };
}