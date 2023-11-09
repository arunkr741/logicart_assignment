import React from "react";
import styles from "./styles.module.scss"
import { CustomStepper } from "../Stepper";
import { PrimaryButton } from "../Buttons/primaryButton";

export const DocketDetails = ({}) => {

    return <div className={styles.container}>

        <CustomStepper/>
        <div className={styles.btnContainer}>
            <PrimaryButton text="Docket No- L123456789" />
        </div>

    
    </div>
}