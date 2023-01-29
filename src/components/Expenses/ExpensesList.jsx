import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = function ({ items }) {
  {
    /* Умовний рендеринг - якщо довжина відфільтрованого масиву дорівнює 0, тоді виводимо тільки параграф. Якщо більше, тоді рендеримо всі елементи масиву */
  }
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
