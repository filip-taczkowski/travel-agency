import React from 'react';
/* Import NPM */
import {Col, Row} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

/* Import JS */
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
/* Import styles */
//import styles from './OrderForm.scss';

const OrderForm = ({options, tripCost, setOrderOption}) => (
  <Row>
    {pricing.map( option => (
      <Col key={option.id} md={4}>
        <OrderOption
          {...option}
          currentValue={options[option.id]}
          setOrderOption={setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary options={options} cost={tripCost} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
