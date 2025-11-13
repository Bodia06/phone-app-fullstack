import React from 'react';
import styles from './phonesListItem.module.css';

export default function PhonesListItem({ phone }) {
  const { brand, hasNfc, image, model, processor, ram, screenSize, year } =
    phone;

  return (
    <div className={styles.PhoneCard}>
      <div className={styles.PhoneImageWrapper}>
        <img src={image} alt={`${brand} ${model}`} />
      </div>
      <div className={styles.PhoneInfo}>
        <h2>
          {brand} {model}
        </h2>
        <p>Rok: {year}</p>
        <p>Procesor: {processor}</p>
        <p>RAM: {ram} GB</p>
        <p>Ekran: {screenSize} cali</p>
        <p>NFC: {hasNfc ? 'Tak' : 'Nie'}</p>
      </div>
    </div>
  );
}
