import React, { FC } from 'react';
import styles from './Loader.module.css';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {

}

export const Loader: FC<LoaderProps> = ({ ...props}) => {
    return <div { ...props } className={styles.loader}>
        
    </div>
}