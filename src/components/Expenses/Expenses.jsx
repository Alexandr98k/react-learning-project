import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const addExpenseFilterHandler = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      {/* додавання компоненту властивості селектед-рік(із стейту) щоб ця властивість була заумовчанням вибрана на початку запуску програми.  */}
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={addExpenseFilterHandler} />
      {expenses.map((expense) => {
        // if (expense.date.getFullYear !== filteredYear) return;
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
