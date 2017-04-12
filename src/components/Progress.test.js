import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Progress from './Progress';
import ToDoItem from '../model/ToDoItem';
import CategoryItem from '../model/CategoryItem';


function setup() {
  let props = { categories: {} }
  props.categories.present = [
      new CategoryItem(6, "Category 2",
      [
        new CategoryItem(7, "Category 2.1", [], []),
        new CategoryItem(8, "Category 2.2", [], []),
      ],
      [
        new ToDoItem(7, "ToDo #2-1", false, ''),
        new ToDoItem(8, "ToDo #2-2", true, ''),
        new ToDoItem(8, "ToDo #2-3", true, ''),
      ])
    ]

  const enzymeWrapper = shallow(<Progress data={props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('<Progress /> component tests', () => {
  it('Progress component calculates progress correctly based on todos in props', () => {
    const { enzymeWrapper } = setup()
    const text = enzymeWrapper.find('h5').text()
    expect(text).toBe("67% completed")
  });
});
