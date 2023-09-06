import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = () => {
  const data = {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май'],
    datasets: [
      {
        label: 'Продажи',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>Пример графика</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
