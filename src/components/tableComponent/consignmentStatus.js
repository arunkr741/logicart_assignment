import React from "react";
import styles from "./styles.module.scss"

const statusConfig = {
    "Booked":{
        text: "Consignment Booked",
        background: "#757C7C"
    },
    "Transit":{
        text: "In Transit",
        background: "#C38282"
    },
    "OFD":{
        text: "Out for Delivery",
        background: "#5589C7"
    },
    "Success":{
        text: "Delivered Successfully",
        background: "#87A65F"
    }
}

export const ConsignmentStatus = ({status}) => {

    const renderStatus = () => {
        switch (status) {
            case "Booked":
                
                break;
        
            default:
                break;
        }
    }

    return <div> <div style={{background: statusConfig[status].background || "black"}} className={styles.statusContainer}>
        <div className={styles.statusText}>{statusConfig[status].text}</div>
    </div>
    </div>
}