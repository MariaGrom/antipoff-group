import './ButtonPagination.css';
import { useDispatch } from 'react-redux';
import { handlClickMore } from '../../store/cardsSlice';

function ButtonPagination() {
const dispatch = useDispatch()

  const handleClick = () => {
    console.log('click')
  }

  return(
    <button type="button" className="btn__pagination btn" onClick={()=>dispatch(handlClickMore())}>
    Показать еще
  </button>
  )
}

export default  ButtonPagination;