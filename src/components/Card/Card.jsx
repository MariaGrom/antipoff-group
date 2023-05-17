import { Link } from "react-router-dom";
import "./Card.css";
import ButtonLike from "../ButtonLike/ButtonLike";

function Card(props) {
  const { card, onClick } = props;

  return (
    <li className="card__content">
      <Link to="/user" onClick={() => onClick(card)}>
        <img className="card__user-img" src={card.avatar} />
        <h2 className="card__user-name">
          {card.first_name} {card.last_name}
        </h2>
      </Link>
      <div className="card__container-like">
        <ButtonLike />
      </div>
    </li>
  );
}

export default Card;
