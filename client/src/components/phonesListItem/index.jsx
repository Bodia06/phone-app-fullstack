import React from 'react';
import styles from './phonesListItem.module.css';
import defaultImage from './../../images/defaultImagePhone.jpeg';

export default function PhonesListItem({ phone, deletePhone, refreshList }) {
  const { id, brand, hasNfc, image, model, processor, ram, screenSize, year } =
    phone;

  const handleDelete = (id) => {
    deletePhone(id);
    refreshList();
  };

  return (
    <div className={styles.PhoneCard}>
      <div className={styles.PhoneImageWrapper}>
        <img
          src={image ? `http://localhost:5001/${image}` : defaultImage}
          alt={`${brand} ${model}`}
        />
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
      <div>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
}
