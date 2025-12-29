
import React, { useState } from "react";
import ExpenseForm from "../components/Expenses/ExpenseForm";
import ExpenseList from "../components/Expenses/ExpenseList";

interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

const Expenses: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </div>
  );
};

export default Expenses;
