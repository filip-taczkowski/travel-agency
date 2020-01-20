import React from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
/* Import JS */
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

/* Import styles */
import styles from './OrderSummary.scss';

const OrderSummary = ({options, cost}) => (
  <h2 className={styles.component}>Total: $ <strong>
    {calculateTotal(formatPrice(cost), options).toFixed(2)}
  </strong></h2>
);

OrderSummary.propTypes = {
  options: PropTypes.object,
  cost: PropTypes.string,
};

export default OrderSummary;
