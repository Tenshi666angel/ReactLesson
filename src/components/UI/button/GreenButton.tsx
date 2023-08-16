import React, { FC } from "react";
import styles from './GreenButton.module.css';
import { IGreenButton } from "../../../types/types";

export const GreenButton: FC<IGreenButton> = ({ children, ...props }) => {
    return <button { ...props } className={styles.button}>{ children }</button>
}