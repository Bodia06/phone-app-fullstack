import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPhonesThunc } from '../../store/slices/phonesSlice';
import PhonesListItem from '../phonesListItem';
import styles from './phonesList.module.css';

function PhonesList({ getPets, isFetching, phones, error }) {
  useEffect(() => {
    getPets();
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
            <PhonesListItem key={p.id} phone={p} />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = (dispatch) => ({
  getPets: () => dispatch(getPhonesThunc()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
