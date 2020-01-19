import React from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
/* Import JS */
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';
/* Import styles */
import styles from './OrderOption.scss';


const OrderOptionIcons = ({values, setOptionValue, currentValue, required}) => (
  <div className={styles.component}>
    { required ? null : (
      <div
        className={styles.icon}
        onClick={() => setOptionValue('')}
      >
        <Icon name='times-circle' />
          none
      </div>
    )}
    {values.map( value => (
      <div
        className={styles.icon + (currentValue != value.id ? '' : ' ' + styles.iconActive)}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);


OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
};



export default OrderOptionIcons;
