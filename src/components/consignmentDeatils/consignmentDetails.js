import React from "react";
import styles from "./styles.module.scss"
import DoughnutChart from "../doughnutChart";
import CustomTable from "../tableComponent";
import { CircleBlueIcon } from "../../Assets/circleBlueIcon";
import { CrossIcon } from "../../Assets/crossIcon";
import { selectedSegmentState } from "../../Atoms";
import { useRecoilState } from "recoil";

export function ConsignmentDetails() {
  const [selectedSegment, setSelectedSegment] = useRecoilState(selectedSegmentState)

  const handleClose = ()=>{
      let pieElements = document.querySelectorAll('.MuiPieArc-series-auto-generated-id-0')
     
      for(let i=0;i<pieElements.length; i++){
          pieElements[i].style.opacity = '1'
      }
      setSelectedSegment(null)
  }

  return (
    <div className={styles.container}>
      <div onClick={handleClose} className={styles.closeIcon}>
        <CircleBlueIcon/>
        <CrossIcon className={styles.crossIcon}/>
      </div>
       <div className={styles.doughnutChartContainer}>
        <div className={styles.doughnutChart}><DoughnutChart/></div>
       </div>
       <div className={styles.tableContainer}>
            <CustomTable/>
        </div>
    </div>
  );
}
