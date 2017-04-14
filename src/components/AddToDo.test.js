import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import AddToDo from './AddToDo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

describe('<AddToDo /> tests', () => {
  it('allows us to set props', () => {
    injectTapEventPlugin();

    //TODO: I don't know how to set props to child element (AddToDo).
    //This does not work: wrapper.find('AddToDo').setProps({ categoryId: "2" });
    //ERROR: ReactWrapper::setProps() can only be called on the root
    const wrapper = mount(<MuiThemeProvider categoryId="1"><AddToDo /></MuiThemeProvider>);
    expect(wrapper.props().categoryId).toBe("1");
    wrapper.setProps({ categoryId: "2" });
    expect(wrapper.props().categoryId).toBe("2");

    /*const wrapper = mount(<AddToDo categoryId="1"/>);
    expect(wrapper.props().categoryId).toBe("1");
    wrapper.setProps({ categoryId: "2" });
    expect(wrapper.props().categoryId).toBe("2");*/

  });

  it('simulates click events', () => {
    const addTodo = sinon.spy();
    const wrapper = mount(
      <MuiThemeProvider><AddToDo addTodo={addTodo} categoryId="1" /></MuiThemeProvider>
    );
    wrapper.find('button').simulate('click');
    expect(addTodo.calledOnce).toBe(false);

    wrapper.find('input').get(0).value = '123';
    wrapper.find('button').simulate('click');
    expect(addTodo.calledOnce).toBe(true);
  });
});
