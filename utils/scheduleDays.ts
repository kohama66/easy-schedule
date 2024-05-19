export type ScheduleDay = {
  day: number;
  ok: boolean;
};

export const newScheduleDays = (month: number): ScheduleDay[] => {
  const now = new Date();
  const year = now.getFullYear();
  // 月の最終日を取得
  const lastDay = new Date(year, month, 0).getDate();
  // 日付の配列を作成
  const daysArray = Array.from({ length: lastDay }, (_, i) => i + 1);

  return daysArray.map((day) => ({ day, ok: true }));
};
