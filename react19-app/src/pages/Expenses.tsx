import React, { useState } from "react";
import ExpenseForm from "../components/Expenses/ExpenseForm";
import ExpenseList from "../components/Expenses/ExpenseList";
import Card from "../components/Expenses/Card";

interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

const Expenses: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    // Load saved expenses from localStorage if they exist
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [expense, ...prevExpenses];
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        backgroundColor: "#001F3D",
      }}
    >
      <div>
        <h1 style={{ fontSize: "large", color: "#fff" }}>Expense Tracker</h1>
        <ExpenseForm onAddExpense={addExpenseHandler} />
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <Card length={100} breadth={200} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <Card length={100} breadth={200} />
        </div>
      </div>

      <ExpenseList items={expenses} />
    </div>
  );
};

export default Expenses;
