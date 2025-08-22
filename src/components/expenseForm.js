export default function ExpenseForm({ form, setForm, onSubmit }) {
  const { expense, price, category, description } = form;
  return (
    <form onSubmit={onSubmit}>
      <h1>React Expense Tracker</h1>
      <label htmlFor="input-expense">What did you spend on?</label>
      <input
        id="input-expense"
        type="text"
        placeholder="e.g. a new TV"
        value={expense}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, expense: e.target.value }))
        }
      />
      <label htmlFor="input-amount">How much did you spend?</label>
      <input
        id="input-amount"
        type="number"
        placeholder="e.g. 786"
        min="0"
        step="0.01"
        value={price}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, price: e.target.value }))
        }
      />
      <label htmlFor="category-selector">Personal or work?</label>
      <select
        id="category-selector"
        value={category}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, category: e.target.value }))
        }
      >
        <option value="" disabled>
          Select one
        </option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
      <label htmlFor="description">Quick description</label>
      <input
        id="description"
        type="text"
        placeholder="e.g. A new TV for my office."
        value={description}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, description: e.target.value }))
        }
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}
