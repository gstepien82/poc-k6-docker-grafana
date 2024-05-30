export function getCurrentUtcDate() {
  const date = new Date();
  date.setSeconds(0);
  date.setMilliseconds(0);
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return utcDate;
}

export function makeAlphaNum(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function getRandomUser() {
  return {
    email: `AT_${makeAlphaNum(10)}@test.org`,
    password: 'P@ssword',
  };
}
