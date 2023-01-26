import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({ title, date, amount }) {
  const [titleName, setTitleName] = useState(title);

  const handleClick = function () {
    setTitleName('update');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleName}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
