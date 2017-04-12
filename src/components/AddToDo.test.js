import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import AddToDo from './AddToDo';

describe('<AddToDo /> tests', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<AddToDo categoryId="1" />);
    expect(wrapper.props().categoryId).toBe("1");
    wrapper.setProps({ categoryId: "2" });
    expect(wrapper.props().categoryId).toBe("2");
  });

  it('simulates click events', () => {
    const addTodo = sinon.spy();
    const wrapper = mount(
      <AddToDo addTodo={addTodo} categoryId="1" />
    );
    wrapper.find('button').simulate('click');
    expect(addTodo.calledOnce).toBe(false);

    wrapper.find('input').get(0).value = '123';
    wrapper.find('button').simulate('click');
    expect(addTodo.calledOnce).toBe(true);
  });
});
