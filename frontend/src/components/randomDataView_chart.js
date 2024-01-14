import axios from "../axios";
import React from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


const RandomDataChart = ({ chartData }) => {
  console.log('chartData', chartData);
 
  const chartData1 = {
    // labels: ['Label 1', 'Label 2', 'Label 3'],
    // datasets: [
    //   {
    //     label: 'My Data',
    //     data: [10, 20, 30],
    //     backgroundColor: 'rgba(75,192,192,0.2)',
    //     borderColor: 'rgba(75,192,192,1)',how to use chartjs 
    //     borderWidth: 1,
    //   },
    // ],
  };

  return (
    <div>
      <h2>Your Chart Title</h2>
      {/* <Bar data={chartData1} options={{ responsive: true }} /> */}
    </div>
  );
};

export default RandomDataChart;