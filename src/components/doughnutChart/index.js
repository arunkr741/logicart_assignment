import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Consignment booked', value: 3, color: '#757C7C' },
  { label: 'In Transit', value: 1, color:'#87A65F' },
  { label: 'Out for delivery', value: 1, color: '#5589C7' },
  { label: 'Delivered successfully', value: 1, color: '#C38181' },
];

export default function DoughnutChart() {
  return (
    <PieChart
      series={[
        {
          data: data,
          arcLabel: (item) => `${item.value}`,
          cx: 60,
        //   cy: 200,
          innerRadius: 25,
          outerRadius: 60,
        },
      ]}
      height={180}
      width={345}
      slotProps={{
        legend: { hidden: false, labelStyle:{fontSize: '12px', fontWeight: 'bold'} },
        
      }}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
        //   fontWeight: 'bold',
          fontSize: '10px',
        },
      }}
    />
  );
}
