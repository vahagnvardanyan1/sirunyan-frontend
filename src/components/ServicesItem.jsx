import React from 'react';
import styles from '../css/services.module.css';

function ServicesItem({ image, title, description, isReversed, onClick }) {
    return (
        <div className={`${styles.service} ${isReversed ? styles.reversed : ''}`} onClick={onClick}>
            <div className={styles['image-container']}>
                <img src={image} alt={title} className={styles.image} />
                <div className={`${styles['title-overlay']} ${isReversed ? styles.right : styles.left}`}>
                        {title}
                    <hr className={`${styles.serviceSectionDivider} ${isReversed ? styles.right : styles.left}`} />
                </div>
            </div>
            <div className={`${styles['text-container']} ${isReversed ? styles['text-right'] : styles['text-left']}`}>
                <div className={styles.text}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesItem;
