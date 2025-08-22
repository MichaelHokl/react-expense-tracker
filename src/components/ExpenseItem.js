function ExpenseItem({ isOpen, onTogglePopup, expense, onDelete, setState }) {
  const { setPersonal, setWork } = setState;
  const setter = expense.category === "personal" ? setPersonal : setWork;
  return (
    isOpen && (
      <>
        <div className="overlay" onClick={() => onTogglePopup(expense)}></div>
        <div className="popup-container">
          <button
            className="close-button"
            onClick={() => onTogglePopup(expense)}
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <h3>{expense.expense}</h3>
          <p>Amount: ${expense.price}</p>
          <p>Added on: {expense.date}</p>
          <p>{expense.description}</p>
          <button
            className="delete-item-button"
            onClick={() => onDelete(expense.id, setter)}
          >
            Delete
          </button>
        </div>
      </>
    )
  );
}

export default ExpenseItem;
