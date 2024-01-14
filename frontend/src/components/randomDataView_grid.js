import axios from "../axios";
import { Bar } from 'react-chartjs-2';

const MyChart = ({ data }) => {
  const chartData = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        label: 'My Data',
        data: data,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};