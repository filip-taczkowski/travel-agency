import React, {useState} from 'react';
/* Import NPM */
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({setOptionValue}) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      dateFormat='dd/MM/yyyy'
      onChange={date => setStartDate(date)}
      onSelect={date => setOptionValue(date)}
    />
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};


export default OrderOptionDate;
