import React from "react";
import styles from "./styles.module.scss";
import { CustomStepper } from "../Stepper";
import { PrimaryButton } from "../Buttons/primaryButton";
import { Link } from "react-router-dom";
import { CircleBlueIcon } from "../../Assets/circleBlueIcon";
import { CrossIcon } from "../../Assets/crossIcon";

export const DocketDetails = () => {
    
  return (
    <div className={styles.container}>
      <div className={styles.closeIcon}>
        <Link to="/">
        <CircleBlueIcon />
        <CrossIcon className={styles.crossIcon} />
        </Link>
      </div>

      <CustomStepper />
      <div className={styles.btnContainer}>
        <PrimaryButton text="Docket No- L123456789" />
      </div>
    </div>
  );
};
