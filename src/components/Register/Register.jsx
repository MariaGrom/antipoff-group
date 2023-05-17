import Form from "../Form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";

function Register() {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  // регистрация пользователя
  async function handleRegister(registrationData) {
    const email = registrationData.email;
    const password = registrationData.password;
    await axios
      .post("https://reqres.in/api/register", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log("Register res===", response);
        dispatch(
          setUser({
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

  return (
    <Form
      title="Регистрация"
      buttonText="Зарегистрироваться"
      onTransferData={handleRegister}
    />
  );
}

export default Register;
