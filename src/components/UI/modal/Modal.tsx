import React, { FC } from "react";
import styles from './Modal.module.css';
import { IModal } from "../../../types/types";

export const Modal: FC<IModal> = ({ children, visible, setVisible }) => {

    const rootClasses = [styles.modal];

    if(visible) {
        rootClasses.push(styles.active);
    }

    return <div className={rootClasses.join(' ')} onClick={e => setVisible(false)}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            { children }
        </div>
    </div>
}