import './Card.css';

function Card(props) {
  //Для компонента кард створюється клас "кард" і той, який записано в іншому компоненті (тобто в пропсах);
  const classes = 'card ' + props.className;
  //Приклад створення компоненту, який буде вміщати інші компоненти та блоки розмітки. Для цього використовується властивість - props.children
  return <div className={classes}>{props.children}</div>;
}

export default Card;
