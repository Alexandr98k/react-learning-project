import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const addExpenseFilterHandler = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === +filteredYear,
  );

  return (
    <Card className="expenses">
      {/* додавання компоненту властивості селектед-рік(із стейту) щоб ця властивість була заумовчанням вибрана на початку запуску програми.  */}
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={addExpenseFilterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
