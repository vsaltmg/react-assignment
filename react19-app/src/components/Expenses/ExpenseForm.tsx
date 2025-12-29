
import React, { useState } from "react";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.amount || !formData.category || !formData.date) {
      alert("Please fill all fields");
      return;
    }

    const newExpense: Expense = {
      id: Date.now().toString(),
      title: formData.title,
      amount: parseFloat(formData.amount),
      category: formData.category,
      date: formData.date,
    };

    onAddExpense(newExpense);
    setFormData({ title: "", amount: "", category: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        style={{ marginRight: "10px" }}
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        style={{ marginRight: "10px" }}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
      </select>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
