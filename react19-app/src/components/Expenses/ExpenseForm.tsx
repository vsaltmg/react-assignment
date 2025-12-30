import React, { useState, useEffect } from "react";
import Card from "./Card";

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

  const [expenses, setExpenses] = useState<Expense[]>(() => {
    // Load from local storage on initial render
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    // Update local storage whenever expenses change
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
      amount: Number(formData.amount),
      category: formData.category,
      date: formData.date,
    };

    setExpenses((prev) => [...prev, newExpense]); // Save to state
    onAddExpense(newExpense); // Notify parent
    setFormData({ title: "", amount: "", category: "", date: "" }); // Reset form
  };

  return (
    <Card length={340} breadth={300}>
      <form onSubmit={handleSubmit}>
        <div>
          <h3 style={{ marginBottom: "15px" }}>Add Expenses Transaction</h3>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            style={{ width: "250px", height: "30px", marginBottom: "10px", fontSize: "16px" }}
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            style={{ width: "250px", height: "30px", marginBottom: "10px", fontSize: "16px" }}
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{ width: "250px", height: "30px", marginBottom: "10px", fontSize: "16px" }}
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
            style={{ width: "250px", height: "30px", marginBottom: "10px", fontSize: "16px" }}
          />
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseForm;
