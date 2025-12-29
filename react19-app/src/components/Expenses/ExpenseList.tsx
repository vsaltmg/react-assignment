
import React from "react";
import ExpenseItem from "./ExpenseItem";

interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

interface ExpenseListProps {
  items: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ items }) => {
  if (items.length === 0) {
    return <p>No expenses found. Add some!</p>;
  }

  return (
    <div>
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          category={expense.category}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
