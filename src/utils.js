export const isLogin = () => {
  if (document.cookie == 'userName = admin') return true;
  return false;
};
