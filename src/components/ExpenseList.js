export default function ExpenseList({
  work,
  personal,
  onDelete,
  setPersonal,
  setWork,
  isOpen,
  onTogglePopup,
}) {
  const workAdded = work.length !== 0;
  const personalAdded = personal.length !== 0;
  return (
    <div className="ul-container">
      <ExpenseListSection
        title="Personal"
        expenses={personal}
        onDelete={onDelete}
        setState={setPersonal}
        condition={personalAdded}
        isOpen={isOpen}
        onTogglePopup={onTogglePopup}
      />

      <ExpenseListSection
        title="Work"
        expenses={work}
        onDelete={onDelete}
        setState={setWork}
        condition={workAdded}
        onTogglePopup={onTogglePopup}
      />
    </div>
  );
}

function ExpenseListSection({
  title,
  expenses,
  onDelete,
  setState,
  condition,
  onTogglePopup,
}) {
  return (
    condition && (
      <div className="list-container">
        <h2>{title}</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <button
                className="delete-button"
                onClick={() => onDelete(expense.id, setState)}
              >
                <i className="fa-solid fa-times"></i>
              </button>
              <div className="expense-details">
                <h3>{expense.expense}</h3>
                <p className="amount">${expense.price}</p>
              </div>
              <button
                className="see-more-button"
                onClick={() => onTogglePopup(expense)}
              >
                See More
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
