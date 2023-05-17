import { useState } from "react";
import classNames from "classnames";
import "./ButtonLike.css";

function ButtonLike() {
  const [isLike, setIsLike] = useState(false);

  const handlClickLike = () => {
    setIsLike(true);
    if (isLike) {
      setIsLike(false);
    }
  };

  return (
    <button
      className={classNames("btn-like", {
        "btn-like_active": isLike,
      })}
      onClick={handlClickLike}
    ></button>
  );
}

export default ButtonLike;
