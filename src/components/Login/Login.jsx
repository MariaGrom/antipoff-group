import Form from "../Form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../store/userSlice";
import { useLogin } from "../../hooks/useLogin";
import { useEffect } from "react";
// import { Navigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { isLogin } = useLogin();
  console.log('isLogin in LOGIN', isLogin)
  // авторизация пользователя
  async function handleLogin(loginData) {
    const email = loginData.email;
    const password = loginData.password;

    await axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log("Login res ===", response);
        dispatch(
          setUserLogin({
            email: response.data.email,
            password: response.data.email,
            token: response.data.token,
          })
        );
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  // useEffect(()=>{
  //   checkToken()
  // }, [isLogin])

  // function checkToken() {
  //   const tokenLogin = localStorage.getItem('tokenLogin')
  //   console.log('tokenLogin',tokenLogin)
  //   if(tokenLogin){
  //     console.log('click')
  //   }
  // }

  // checkToken()

  return (
    <Form title="Авторизация" buttonText="Войти" onTransferData={handleLogin} />
  );
}

export default Login;
