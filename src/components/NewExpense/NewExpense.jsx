import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);

  //Функція обробник для отримання даних із дочірнього елементу
  const onSaveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);

    //closing form after submiting
    stopEditingHandler();
  };

  const startEditingHandler = function () {
    setIsEditing(true);
  };

  const stopEditingHandler = function () {
    setIsEditing(false);
  };

  console.log(isEditing);

  return (
    <div className="new-expense">
      {/* робимо умовний рендеринг */}
      {!isEditing && (
        <button type="submit" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {/* передаємо в пропс функцію-обробник і викликаємо її в дочірньому елементі передаючи в ню дані, які ми хочемо передати в цей компонент */}
      {isEditing && (
        <ExpenseForm
          onStopEditing={stopEditingHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
