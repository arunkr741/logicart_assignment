import React, { useState } from 'react';
import { PieChart, pieArcClasses, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useRecoilState } from 'recoil';
import { selectedSegmentState } from '../../Atoms';

const data = [
  { label: 'Consignment booked', value: 3, color: '#757C7C', segmentType: "Booked" },
  { label: 'In Transit', value: 1, color:'#C38181', segmentType: "Transit" },
  { label: 'Out for delivery', value: 1, color: '#5589C7', segmentType: "OFD" },
  { label: 'Delivered successfully', value: 1, color: '#87A65F', segmentType: "Success" },
];



export default function DoughnutChart() {
  const [selectedSegment, setSelectedSegment] = useRecoilState(selectedSegmentState)

  const handleSegmentClick = (e, piechartData,metaData) => {
    let pieElements = document.querySelectorAll('.MuiPieArc-series-auto-generated-id-0')
   
    for(let i=0;i<pieElements.length; i++){
      if (i == piechartData.dataIndex) {
        pieElements[i].style.opacity = '1'
      }
      else{
      pieElements[i].style.opacity = '0.2'
      }
    }
    console.log(metaData.segmentType)
    setSelectedSegment(metaData.segmentType)
  };

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
      onClick={handleSegmentClick}
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
