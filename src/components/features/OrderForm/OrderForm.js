import React from 'react';
/* Import NPM */
import {Col, Row} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

/* Import JS */
import OrderSummary from '../OrderSummary/OrderSummary';
/* Import styles */
//import styles from './OrderForm.scss';

const OrderForm = ({options, tripCost}) => (
  <Row>
    <Col xs={12}>
      <OrderSummary options={options} cost={tripCost} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderForm;
