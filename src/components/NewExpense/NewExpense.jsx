import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense({ onAddExpense }) {
  //Функція обробник для отримання даних із дочірнього елементу
  const onSaveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* передаємо в пропс функцію-обробник і викликаємо її в дочірньому елементі передаючи в ню дані, які ми хочемо передати в цей компонент */}
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
