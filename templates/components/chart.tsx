// Chart.tsx
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

interface ChartProps {
  id: string;
  options: Highcharts.Options;
}

const Chart: React.FC<ChartProps> = ({ id, options }) => {
  useEffect(() => {
    const chart = Highcharts.chart(id, options);

    return () => {
      chart.destroy();
    };
  }, [id, options]);

  return <div id={id} />;
};

export default Chart;
