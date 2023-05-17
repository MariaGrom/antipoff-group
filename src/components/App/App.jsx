import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { cardsFetch, clickMore } from "../../store/cardsSlice";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";


function App() {
  const [selectedCard, setSelectedCard] = useState({});
  
  const {error} = useSelector(state => state.cards);
  const dispatch = useDispatch();

  const onCardClick = (card) => {
    setSelectedCard(card);
  };

  useEffect(() => {
    dispatch(cardsFetch());
  }, [dispatch]);

  // useEffect(()=>{
  //   dispatch(clickMore())
  // }, [dispatch])

  return (
    <>
      <Routes>
        <Route
          path="/signup"
          element={<Register/>}
        />
        <Route
          path="/signin"
          element={<Login/>}
        />
        {/* {error && <h2>Ошибка сервера: {error}</h2>} */}
        <Route path="/" element={<Main onCardClick={onCardClick} />} />
        <Route path="/user" element={<Profile card={selectedCard} />} />
      </Routes>
    </>
  );
}

export default App;
