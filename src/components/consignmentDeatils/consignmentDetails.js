import React from "react";
import styles from "./styles.module.scss"
import DoughnutChart from "../doughnutChart";
import CustomTable from "../tableComponent";

export function ConsignmentDetails() {

  return (
    <div className={styles.container}>
       <div className={styles.doughnutChartContainer}>
        <div className={styles.doughnutChart}><DoughnutChart/></div>
       </div>
       <div className={styles.tableContainer}>
            <CustomTable/>
        </div>
    </div>
  );
}
