'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

import { UserAuth } from '@/context/AuthContext';
import { Data } from '@/utils/Data';

import PieChart from '@/components/PieChart';
import BarChart from '@/components/BarChart';
import LineChart from '@/components/LineChart';

const Dashboard = () => {
  const { user } = UserAuth();

  useEffect(() => {
    if (!user) {
      return redirect('/');
    }
  }, [user]);

  const [chartData, setChartData] = useState({
    labels: Data.map(data => data.year),
    datasets: [
      {
        label: 'Users Gained ',
        data: Data.map(data => data.userGain),
        backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0'],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  return !user ? null : (
    <div className="container">
      <h1 className="my-[50px] text-3xl text-center">Cool Dashboard!</h1>

      <div className="flex items-center justify-between">
        <PieChart chartData={chartData} />

        <div className="flex flex-col gap-20 w-[400px]">
          <BarChart chartData={chartData} />

          <LineChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
