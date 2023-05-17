import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import "./Main.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { useEffect } from "react";
import ButtonPagination from "../ButtonPagination/ButtonPagination";

function Main(props) {
  const { onCardClick } = props;
  const cards = useSelector((state) => state.cards.cards);
  const { isLogin } = useLogin();

  const { error } = useSelector((state) => state.cards);

  useEffect(() => {
    console.log("1");
  }, [isLogin]);

  console.log("isLogin Main", isLogin);

  return isLogin ? (
    <main>
      <section className="main__header-container">
        <div className="main__header-content ">
          <div className="main__description ">
            <h1 className="main__title">Наша команда</h1>
            <h2 className="main__subtitle">
              Это опытные специалисты, хорошо разбирающиеся во всех задачах,
              которые ложатся на их плечи, и умеющие находить выход из любых,
              даже самых сложных ситуаций.
            </h2>
          </div>
          <Button />
        </div>
      </section>
      <section className="main__content">
        <ul className="main__list-cards">
            {cards.map((card) => (
              <Card key={card.id} card={card} onClick={onCardClick} />
            ))}
        </ul>
        <ButtonPagination />
      </section>
    </main>
  ) : (
    <Navigate to="/signin" replace />
  );
}

export default Main;
