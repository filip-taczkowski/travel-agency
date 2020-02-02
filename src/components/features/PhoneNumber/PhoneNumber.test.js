import React from 'react';
import {shallow} from 'enzyme';
import PhoneNumber from './PhoneNumber';

const select = {
  name: '.name',
  phoneNumber: '.phoneNumber',
};

const mockNames = {
  from8: 'Amanda',
  from12: 'Tobias',
  from16: 'Helena',
  from22: 'The office opens at 8:00 UTC',
};

const mockPhones = {
  from8: '678.243.8455',
  from12: '278.443.6443',
  from16: '167.280.3970',
  from22: '',
};


describe('Component PhoneNumber', () => {
  it('should render w/o crashing', () => {
    const component = shallow(<PhoneNumber />);
    expect(component).toBeTruthy();
  });

  it('should render name and number', () => {
    const component = shallow(<PhoneNumber />);
    expect(component.exists(select.name)).toEqual(true);
    expect(component.exists(select.phoneNumber)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkNameAndNumberAtTime = (time, expectedName, expectedNumber) => {
  it(`should show correct name and phone number at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<PhoneNumber />);
    const renderedName = component.find(select.name).text();
    const renderedNumber = component.find(select.phoneNumber).text();
    expect(renderedName).toEqual(expectedName);
    expect(renderedNumber).toEqual(expectedNumber);
    console.log(component.debug());

    global.Date = trueDate;
  });
};

describe('Component PhoneNumber with mocked Date', () => {
  checkNameAndNumberAtTime('08:00:00', mockNames.from8, mockPhones.from8);
  checkNameAndNumberAtTime('11:59:59', mockNames.from8, mockPhones.from8);
  checkNameAndNumberAtTime('12:00:00', mockNames.from12, mockPhones.from12);
  checkNameAndNumberAtTime('15:59:59', mockNames.from12, mockPhones.from12);
  checkNameAndNumberAtTime('16:00:00', mockNames.from16, mockPhones.from16);
  checkNameAndNumberAtTime('21:59:59', mockNames.from16, mockPhones.from16);
  checkNameAndNumberAtTime('22:00:00', mockNames.from22, mockPhones.from22);
  checkNameAndNumberAtTime('07:59:59', mockNames.from22, mockPhones.from22);
});
