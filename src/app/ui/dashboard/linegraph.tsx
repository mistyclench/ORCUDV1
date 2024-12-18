"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Claim Report',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// ... rest of the code
const datasets =     [...Array(10)].map((_, index) => {
  return {
    label: faker.company.name(),
    data: labels.map (() =>Array(7).fill(null).map(() => faker.number.int({ min: -1000, max: 1000 }))),
    backgroundColor: `rgba(${faker.number.int({ min: 0, max: 255 })}, ${faker.number.int({ min: 0, max: 255 })}, ${faker.number.int({ min: 0, max: 255 })}, 0.5)`,
    borderColor: `rgba(${faker.number.int({ min: 0, max: 255 })}, ${faker.number.int({ min: 0, max: 255 })}, ${faker.number.int({ min: 0, max: 255 })}, 1)`,
    borderWidth: 1,
    pointRadius: 0,
    key: index,

  };
})

export const data = {
  labels,
  datasets: datasets
};


export default function Linegraph() {
  return <Line options={options} data={data} />;
}
