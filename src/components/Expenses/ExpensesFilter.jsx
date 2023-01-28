import './ExpensesFilter.css';

const ExpensesFilter = function ({ onChangeFilter, selectedYear }) {
  const onChangeSelectHandler = function (e) {
    onChangeFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* встановлення дефолтного значення селекту через валью */}
        <select value={selectedYear} onChange={onChangeSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
