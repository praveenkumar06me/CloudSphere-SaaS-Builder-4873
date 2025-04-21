import React from 'react';
import { RiUserLine, RiMoneyDollarCircleLine, RiPieChartLine } from 'react-icons/ri';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';
import MetricCard from '../components/MetricCard';

const Analytics = () => {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$54,230',
      change: 12.5,
      icon: RiMoneyDollarCircleLine
    },
    {
      title: 'Active Users',
      value: '2,345',
      change: 8.2,
      icon: RiUserLine
    },
    {
      title: 'Conversion Rate',
      value: '5.67%',
      change: -2.1,
      icon: RiPieChartLine
    }
  ];

  const revenueData = {
    dates: Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toISOString();
    }),
    series: [
      {
        name: 'Revenue',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000) + 5000)
      },
      {
        name: 'Users',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 500)
      }
    ]
  };

  const userDistribution = [
    { value: 1048, name: 'Free Tier' },
    { value: 735, name: 'Pro Plan' },
    { value: 580, name: 'Enterprise' },
    { value: 484, name: 'Trial Users' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h1>
        <select className="border rounded-md px-3 py-2 text-sm text-gray-700">
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <LineChart
          data={revenueData}
          title="Revenue & User Growth"
        />
        <PieChart
          data={userDistribution}
          title="User Distribution by Plan"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Key Performance Indicators</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Avg. Session Duration', value: '12m 30s' },
            { label: 'Bounce Rate', value: '32.4%' },
            { label: 'Pages per Session', value: '4.2' },
            { label: 'New User Rate', value: '25.8%' }
          ].map((kpi) => (
            <div key={kpi.label} className="border-l-4 border-primary-500 pl-4">
              <p className="text-sm text-gray-500">{kpi.label}</p>
              <p className="text-xl font-semibold mt-1">{kpi.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;