import React from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
/* Import JS */
import {formatPrice} from '../../../utils/formatPrice';
/* Import styles */
import styles from './OrderOption.scss';

const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => (
  <select
    className={styles.dropdown}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {values.map(value => (
      <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
    ))}
  </select>
);

OrderOptionDropdown.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  required: PropTypes.object,
  values: PropTypes.array,
};

export default OrderOptionDropdown;
