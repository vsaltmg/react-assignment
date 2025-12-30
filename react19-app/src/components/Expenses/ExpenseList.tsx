import React from "react";

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
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Title</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Amount</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Category</th>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Date</th>
        </tr>
      </thead>
      <tbody>
        {items.map((expense) => (
          <tr key={expense.id}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {expense.title}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {expense.amount}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {expense.category}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {expense.date}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
