import React, { useState } from 'react';
import PhonesList from '../../components/phonesList';
import styles from './phonesPage.module.css';
import { connect } from 'react-redux';
import { createPhoneThunc } from '../../store/slices/phonesSlice';
import PhonesCreateFrom from '../phonesCreateFormPage';

function PhonesPage({ createPhone }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenForm = () => {
    console.log(isOpening);
    setIsOpening(!isOpening);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>📱 Phones Information</h1>
        <p className={styles.subtitle}>
          Discover and manage all your devices in one elegant view.
        </p>
        <div className={styles.actions}>
          <button className={styles.addButton} onClick={handleOpenForm}>
            ➕ Add New Phone
          </button>
        </div>
      </div>
      {isOpening ? <PhonesCreateFrom createPhone={createPhone} /> : null}
      <div className={styles.listContainer}>
        <PhonesList />
      </div>
    </div>
  );
}

const mapStateToProps = (phonesData) => phonesData;

const mapDispatchToProps = (dispatch) => ({
  createPhone: (values) => dispatch(createPhoneThunc(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesPage);
