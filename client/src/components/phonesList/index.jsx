import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  deletePhoneThunc,
  getPhonesThunc,
} from '../../store/slices/phonesSlice';
import PhonesListItem from '../phonesListItem';
import styles from './phonesList.module.css';

function PhonesList({ getPhones, deletePhone, isFetching, phones, error }) {
  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div className={styles.PhonesListWrapper}>
      {error && <div className={styles.PhonesListError}>{error}</div>}
      {isFetching && (
        <div className={styles.PhonesListLoading}>Ładowanie...</div>
      )}
      {!error && !isFetching && (
        <div className={styles.PhonesList}>
          {phones.map((p) => (
            <PhonesListItem
              key={p.id}
              phone={p}
              deletePhone={deletePhone}
              refreshList={getPhones}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = (dispatch) => ({
  getPhones: () => dispatch(getPhonesThunc()),
  deletePhone: (id) => dispatch(deletePhoneThunc(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
