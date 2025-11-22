export const sleep = (secs = 3): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, secs * 1000));

export const randomAvatarUrlBySex = (gender: string) => {
  const m = Math.floor(Math.random() * 7) + 1;
  const f = Math.floor(Math.random() * 8) + 1;
  return gender === "Male"
    ? `/uploads/avatar-m-${m}.png`
    : `/uploads/avatar-f-${f}.png`;
};