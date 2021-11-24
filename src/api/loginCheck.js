export default () => {
  const authId = localStorage.getItem('auth');
  return authId != null;
};
