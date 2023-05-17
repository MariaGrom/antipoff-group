import { useSelector } from "react-redux";

export function useLogin() {
  const { email, password, token } = useSelector(state => state.user);
  return {
    isLogin: token,
    email,
    password,
    token,
  };
}
