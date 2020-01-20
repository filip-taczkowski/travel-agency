import React from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
/* Import styles */
import styles from './OrderOption.scss';

const OrderOptionText = ({name, setOptionValue}) => (
  <div>
    <input
      className={styles.text}
      type='text'
      value={name}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  name: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
