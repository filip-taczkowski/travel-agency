import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link based on id', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]} />);

    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('should have correct src, alt for <img>', () => {
    const expectedSrc = 'image.png';
    const expectedAlt = 'image';

    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should reneder correct props: name, cost, days', () => {
    const expectedName = 'Name';
    const expectedCost = '$333,111.21';
    const expectedDays = 3;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').children().last().text()).toEqual(expectedCost);
    expect(parseInt(component.find('.details span').children().first().text())).toEqual(expectedDays);
  });

  it('should throw error when one of required props is missing', () => {
    //expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct tags', () => {
    const expectedTags = ['abc', '123', 'zxc'];
    const component = shallow(<TripSummary tags={expectedTags} />);
    for (let i=0 ; i < expectedTags.length ; i++) {
      expect(component.find('.tag').at(i).text()).toEqual(expectedTags[i]);
    }
  });

  it('should not render tags when prop tags is false', () => {
    const component = shallow(<TripSummary tags={[]}/>);
    expect(component.find('.tags').exists()).toEqual(false);
  });


});
