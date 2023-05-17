## SPA приложение для команды 
### Основной функционал: 
- форма регистрации и авторизации с проверкой полей на стороне клиента (2 разные страницы);
- главная страница приложения - загрузка данных о составе команды с открытого api (https://reqres.in/). На главную страницу могу попасть только зарегистрированные пользователи (участники команды);
- простановка и снятие лайка с карточки участника команды;
- загрузка дополнительных карточек по клику на кнопку "загрузить еще";
-  открытие страницы пользователя с подробной информацией по клику на карточку участника команды;
- переход на обратно на главную страницу приложения по клику на кнопку "назад" со страницы пользователя; 
- выход из аккаунта по клику на кнопку "выход";

### Основной стэк: 
- React;
- React Router;
- Redux;
- Axios.

### Улучшить: 
- доработать кнопку "загрузить еще";
- улучшить стили (применить SASS);
- переписать с использованием TypeScript;
- сохранять данные залайканных карточек на стороне клиента;
- доработать свой хук по отслеживанию залогиненного пользователя. 