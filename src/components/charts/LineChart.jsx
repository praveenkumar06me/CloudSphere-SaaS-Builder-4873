import React from 'react';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

const LineChart = ({ data, title }) => {
  const option = {
    tooltip: {
      trigger: 'axis',
      formatter: function(params) {
        const date = new Date(params[0].axisValue);
        return `${format(date, 'MMM dd')}
                ${params.map(param => 
                  `<br/>${param.marker} ${param.seriesName}: ${param.value}`
                ).join('')}`;
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.dates,
      axisLabel: {
        formatter: (value) => format(new Date(value), 'MMM dd')
      }
    },
    yAxis: {
      type: 'value'
    },
    series: data.series.map(series => ({
      name: series.name,
      type: 'line',
      smooth: true,
      data: series.data,
      animationDuration: 2000,
      areaStyle: {
        opacity: 0.1
      }
    }))
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ReactECharts option={option} style={{ height: '400px' }} />
    </div>
  );
};

export default LineChart;