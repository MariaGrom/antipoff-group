import "./Profile.css";
import email from "../../img/email.svg";
import phone from "../../img/phone.svg";
import Button from "../Button/Button";
import ButtonGoback from "../ButtonGoback/ButtonGoback";

function Profile(props) {
  const { card } = props;

  return (
    <>
      <div className="profile__header-container ">
        <div className="profile__header-content">
          <ButtonGoback />
          <div className="profile__user-content">
            <img
              className="profile__img"
              alt="Фото профайла"
              src={card.avatar}
            />
            <div className="profile__info">
              <h2 className="profile__title">
                {card.first_name} {card.last_name}
              </h2>
              <h3 className="profile__subtitle">Партнер</h3>
            </div>
          </div>
          <Button />
        </div>
      </div>
      <div className="profile__description">
        <p className="profile__text">
          Клиенты видят в нем эксперта по вопросам разработки комплексных
          решений финансовых продуктов, включая такие аспекты, как
          организационная структура, процессы, аналитика и ИТ-компоненты. Он
          помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
          процессы за счет применения новейших технологий и увеличивать продажи,
          используя самые современные аналитические инструменты. В работе с
          клиентами недостаточно просто решить конкретную проблему или помочь
          справиться с трудностями. Не менее важно уделять внимание обмену
          знаниями: "Один из самых позитивных моментов — это осознание того, что
          ты помог клиенту перейти на совершенно новый уровень компетентности,
          уверенность в том, что после окончания проекта у клиента есть все
          необходимое, чтобы дальше развиваться самостоятельно". Помимо
          разнообразных проектов для клиентов финансового сектора, Сорин ведет
          активную предпринимательскую деятельность. Он является совладельцем
          сети клиник эстетической медицины в Швейцарии, предлагающей
          инновационный подход к красоте, а также инвестором других
          бизнес-проектов.
        </p>
        <address className="contacts">
          <div className="contacts__container contacts__phone">
            <img src={phone} />
            <p>+7 (954) 333-44-55</p>
          </div>
          <div className="contacts__container contacts__email">
            <img src={email} />
            <a href="#">{card.email}</a>
          </div>
        </address>
      </div>
    </>
  );
}
export default Profile;
