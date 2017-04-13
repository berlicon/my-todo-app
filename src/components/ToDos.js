import React, { Component } from 'react';
import { connect } from 'react-redux'
import editImage from './images/edit.png';
import Modal from 'react-modal';

class ToDos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.saveChangesAndCloseModal = this.saveChangesAndCloseModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
  }

  openModal(todo) {
    this.setState({todo: todo, modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.txtTitle.value = this.state.todo.title;
    this.refs.chkIsDone.checked = this.state.todo.isDone;
    this.refs.txtDescription.value = this.state.todo.description;
  }

  saveChangesAndCloseModal() {
    this.props.updateTodo(
      this.state.todo.id,
      this.refs.txtTitle.value,
      this.refs.chkIsDone.checked,
      this.refs.txtDescription.value
    );
    this.setState({modalIsOpen: false});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    this.listItems = this.props.data.selectedCategory.present.todos.map((todo) =>
    {
      return ((this.props.data.todoFilter.isDone && !todo.isDone)
      || !todo.title.includes(this.props.data.todoFilter.filter)) ? null :
      <div key={todo.id} className="todoDiv">
        <div style={{ height: '25px' }}>
          <div style={{ float: 'left' }}>
            <input type="checkbox" checked={todo.isDone} readOnly/>
            &nbsp;&nbsp;{todo.title}
          </div>
          <div style={{ float: 'right' }}>
            <button onClick={() => this.openModal(todo)}>
              <img src={editImage} alt="Edit todo" title="Edit todo"/>
            </button>
          </div>
        </div>
      </div>
    }
    );

    return (
      <div style={{ textAlign: 'left' }}>
        <div>Count of todos in selected category: <b>{this.listItems.length}</b></div>
        <hr/>
        {this.listItems}

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={this.customStyles}
          contentLabel="Edit popup"
        >

          <button onClick={this.saveChangesAndCloseModal}>Save changes</button>
          &nbsp;&nbsp;
          <button onClick={this.closeModal}>Cancel</button>
          <br/><br/>
          <form>
            <input type="text" placeholder="Title" ref="txtTitle"/><br/><br/>
            <label>
              <input type="checkbox" defaultChecked ref="chkIsDone"/>
              Done
            </label>
            <br/><br/>
            <textarea cols="40" rows="5" placeholder="Description" ref="txtDescription"/>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTodo: (todoId, title, isDone, description) => {
      dispatch({type: 'UPDATE_TODO_IN_SELECTED_LIST', todoId: todoId, title: title , isDone: isDone , description: description })
      dispatch({type: 'UPDATE_TODO_TO_SELECTED_CATEGORY', todoId: todoId, title: title , isDone: isDone , description: description })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDos)
