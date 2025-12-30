
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SpendingChart: React.FC = () => {
  const data = {
    labels: ["Food & Dining", "Transport", "Shopping", "Entertainment", "Others"],
    datasets: [
      {
        data: [421.75, 245, 241, 120, 180.75],
        backgroundColor: [
          "#34d399", // green
          "#60a5fa", // blue
          "#fbbf24", // yellow
          "#f87171", // red
          "#a78bfa", // purple
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl mb-4">Spending Breakdown</h3>
      <Doughnut data={data} />
      <p className="text-center mt-4 text-gray-400">Total Spent: $1,205</p>
    </div>
  );
};

export default SpendingChart;
