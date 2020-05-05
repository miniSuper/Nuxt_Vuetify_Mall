export const checkLogin = ({
  isDev,
  route,
  store,
  env,
  params,
  query,
  req,
  res,
  redirect,
  error
}) => {
  if (!store.state.user.userInfo.uid) {
    return redirect('/user/login')
  }
}
