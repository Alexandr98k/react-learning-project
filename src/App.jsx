import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Paper',
    amount: 34.12,
    date: new Date(2020, 2, 29),
  },
  {
    id: 'e6',
    title: 'Shampoo',
    amount: 10.5,
    date: new Date(2021, 8, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  //створюємо функцію-обробник для виведення доданого запису в батьківський компонент
  const addExpenseHandler = function (expense) {
    return setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      {/* Передаємо в пропси компоненту функцію-обробник */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
