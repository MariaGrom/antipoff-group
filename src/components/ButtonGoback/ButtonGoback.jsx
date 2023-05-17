import "./ButtonGoback.css";
import { useNavigate } from "react-router";

function ButtonGoback() {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <button type="button" className="btn btn__goback" onClick={handleGoBack}>
      Назад
    </button>
  );
}

export default ButtonGoback;
