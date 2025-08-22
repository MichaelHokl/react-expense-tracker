import "./index.css";
import ExpenseForm from "./components/expenseForm.js";
import ExpenseList from "./components/ExpenseList.js";
import ExpenseItem from "./components/ExpenseItem.js";
import { useState } from "react";

function App() {
  const [selectedExpense, setSelectedExpense] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [personal, setPersonal] = useState([]);
  const [work, setWork] = useState([]);
  const [form, setForm] = useState({
    expense: "",
    price: "",
    category: "",
    description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.expense || !form.price || !form.category || !form.description)
      return;
    const newItem = {
      expense: form.expense,
      price: form.price,
      category: form.category,
      description: form.description,
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
    };
    form.category === "personal"
      ? setPersonal([...personal, newItem])
      : setWork([...work, newItem]);
    setForm({
      expense: "",
      price: "",
      category: "",
      description: "",
    });
  }

  function handleDeleteExpense(id, setState) {
    setState((prev) => prev.filter((item) => item.id !== id));
  }

  function handlePopupDelete(id, setState) {
    handleDeleteExpense(id, setState);
    setIsOpen(false);
  }

  function handleTogglePopup(listItem) {
    setSelectedExpense(listItem);
    setIsOpen(isOpen === true ? false : true);
  }

  console.log(work);
  return (
    <div className="main-container">
      <ExpenseForm form={form} setForm={setForm} onSubmit={handleSubmit} />
      {work.length === 0 && personal.length === 0 ? (
        <p className="starting-p">Start adding some expenses</p>
      ) : (
        <ExpenseList
          work={work}
          setWork={setWork}
          setPersonal={setPersonal}
          personal={personal}
          onDelete={handleDeleteExpense}
          onTogglePopup={handleTogglePopup}
          isOpen={isOpen}
        />
      )}
      <ExpenseItem
        isOpen={isOpen}
        onTogglePopup={handleTogglePopup}
        expense={selectedExpense}
        onDelete={handlePopupDelete}
        setState={{ setPersonal, setWork }}
      />
    </div>
  );
}

export default App;
