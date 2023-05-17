import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/userSlice';
import './Button.css';

function Button() {
  const dispatch = useDispatch();

  return(
    <button type="button" className="header__btn_login btn" onClick={()=>dispatch(removeUser())}>
    Выход
  </button>
  )
}

export default Button