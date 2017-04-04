import React, { Component } from 'react';
import './App.css';
import Filter from './Filter';
import Progress from './Progress';
import AddCategory from './AddCategory';
import AddToDo from './AddToDo';
import CategoryTree from './CategoryTree';
import ToDos from './ToDos';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="table">
          <tbody>
            <tr>
              <td><h3>To-Do List2</h3></td>
              <td><Filter /></td>
            </tr>
            <tr>
              <td colSpan="2"><Progress /></td>
            </tr>
            <tr>
              <td><AddCategory addCategory={this.props.addCategory} />
              </td>
              <td><AddToDo /></td>
            </tr>
            <tr>
              <td><CategoryTree data={this.props.tree} /></td>
              <td style={{ verticalAlign: 'top' }}>
                <ToDos data={this.props.tree}/>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tree: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (value) => {
      dispatch({type: 'ADD_CATEGORY', text: value})
    }
  }
}

const BindedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default BindedApp
