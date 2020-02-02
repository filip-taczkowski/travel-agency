import React from 'react';
import styles from './PhoneNumber.scss';

class PhoneNumber extends React.Component {
  constructor() {
    super();
    setInterval(() => this.forceUpdate(), 1000);
  }

  state = {
    from8: {
      name: 'Amanda',
      number: '678.243.8455',
    },
    from12: {
      name: 'Tobias',
      number: '278.443.6443',
    },
    from16: {
      name: 'Helena',
      number: '167.280.3970',
    },
    from22: {
      name: 'The office opens at 8:00 UTC',
      number: '',
    },
  }

  getCurrentHour() {
    const currentTime = new Date();
    return currentTime.getUTCHours();
  }

  getCurrentNameAndNumber() {
    const current = {};
    const currentHour = this.getCurrentHour();

    if (currentHour >= 8 && currentHour < 12) {
      current.name = this.state.from8.name;
      current.phone = this.state.from8.number;
    } else if (currentHour >= 12 && currentHour < 16) {
      current.name = this.state.from12.name;
      current.phone = this.state.from12.number;
    } else if (currentHour >=16 && currentHour < 22) {
      current.name = this.state.from16.name;
      current.phone = this.state.from16.number;
    } else {
      current.name = this.state.from22.name;
      current.phone = this.state.from22.number;
    }

    return current;
  }

  render() {
    const current = this.getCurrentNameAndNumber();
    return (
      <div className={styles.component}>
        <div className={styles.name}>{current.name}</div>
        <div className={styles.phoneNumber}>{current.phone}</div>
      </div>
    );
  }
}

export default PhoneNumber;
