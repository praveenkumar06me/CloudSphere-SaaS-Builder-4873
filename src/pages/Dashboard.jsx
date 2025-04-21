import React from 'react';
import { motion } from 'framer-motion';
import { RiTeamLine, RiShoppingBagLine, RiPieChartLine } from 'react-icons/ri';
import MetricCard from '../components/MetricCard';
import LineChart from '../components/charts/LineChart';

const Dashboard = () => {
  const metrics = [
    {
      title: 'Total Users',
      value: '1,234',
      change: 12,
      icon: RiTeamLine
    },
    {
      title: 'Revenue',
      value: '$12,345',
      change: 8,
      icon: RiShoppingBagLine
    },
    {
      title: 'Conversion Rate',
      value: '5.7%',
      change: 15,
      icon: RiPieChartLine
    }
  ];

  const activityData = {
    dates: Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return date.toISOString();
    }),
    series: [
      {
        name: 'Activity',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.title}
            {...metric}
          />
        ))}
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        <LineChart
          data={activityData}
          title="Weekly Activity"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { user: 'John Doe', action: 'Created new project', time: '2 hours ago' },
              { user: 'Jane Smith', action: 'Updated profile', time: '4 hours ago' },
              { user: 'Mike Johnson', action: 'Completed task', time: '5 hours ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  {activity.user.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.user}</p>
                  <p className="text-xs text-gray-500">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
          <div className="space-y-4">
            {[
              { label: 'Active Projects', value: '12' },
              { label: 'Completed Tasks', value: '48' },
              { label: 'Pending Reviews', value: '6' }
            ].map((stat, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-600">{stat.label}</span>
                <span className="font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;