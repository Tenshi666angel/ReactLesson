import React, { FC } from "react";
import styles from './GreenSelect.module.css';
import { IGreenSelect } from "../../../types/types";

export const GreenSelect: FC<IGreenSelect> = ({ defaultValue, options, ...props }) => {
    return <select { ...props } className={styles.select}>
        <option disabled>{defaultValue}</option>
        { options.map((op, index) => <option key={index} value={op.value}>{op.text}</option>) }
    </select>
}