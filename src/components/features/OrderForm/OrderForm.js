import React from 'react';
/* Import NPM */
import {Col, Row} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

/* Import JS */
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const validateForm = formInformation => {
  if (!formInformation.name || !formInformation.contact) {
    return false;
  } else {
    return true;
  }
};

const sendOrder = (options, tripCost, tripName, tripId, tripCountryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    tripId,
    tripName,
    tripCountryCode,
    ...options,
    totalCost,
  };

  if (!validateForm(payload)) {
    alert('Name and contact fields are required!');
  } else {

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }
};

const OrderForm = ({options, tripCost, setOrderOption, tripName, tripId, tripCountryCode}) => (
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
    <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, tripCountryCode)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  tripCountryCode: PropTypes.string,
};

export default OrderForm;
