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
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </Card>
  );
}

export default Expenses;
