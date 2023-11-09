import React from "react";
import styles from "./styles.module.scss"

export const PrimaryButton = ({text, onClick}) => {


    return <div className={styles.btnConatiner} onClick={onClick}>
        <div className={styles.btnText}>{text}</div>
    </div>
}
