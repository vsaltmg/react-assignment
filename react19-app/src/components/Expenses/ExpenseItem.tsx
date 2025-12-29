
import React from "react";

interface ExpenseItemProps {
  title: string;
  amount: number;
  category: string;
  date: string;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ title, amount, category, date }) => {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
      <h3>{title}</h3>
      <p>Amount: ${amount}</p>
      <p>Category: {category}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default ExpenseItem;
