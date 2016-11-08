import React from 'react';
import ReactDOM from 'react-dom';
import {App,InputName} from './App';
import { shallow, mount} from 'enzyme';
import sinon from 'sinon';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('<App />', () => {
  it('renders  <InputName /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(InputName).length).toBe(1);
  });
})

describe('<InputName />', () => {
  const wrapper = mount(<InputName name="tony"/>);
  it('take props and set state', () => {
    expect(wrapper.prop('name')).toEqual("tony");
    expect(wrapper.state('name')).toEqual("tony");
  })
  it('contains 10 Hello {name} inside a <p>', () => {
    expect(wrapper.find('p').length).toBe(10)
  })
  it('onChange in input state changes', () => {
    const inputTag = wrapper.find('input');
    inputTag.simulate('change',{ target : { value  : "New Value"}})
    expect(wrapper.state('name')).toEqual("New Value");
  })
})
