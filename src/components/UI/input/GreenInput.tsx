import React, { FC } from "react";
import styles from './GreenInput.module.css';
import { IGreenInput } from "../../../types/types";

export const GreenInput: FC<IGreenInput> = ({ ...props }) => {
    return <input {...props} className={styles.input} type="text" />
}