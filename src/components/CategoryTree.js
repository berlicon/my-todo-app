import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import addImage from './images/add.png';
import deleteImage from './images/delete.png';
import editImage from './images/edit.png';
import selectImage from './images/select.png';
import moveImage from './images/move.png';

class CategoryTree extends Component {
  constructor(props) {
        super(props);
        this.state = {
            treeData: this.props.data.categories.present,
        };
        this.selectedCategoryTitle = '???';
        this.selectedCategoryTodosCount = '???';
    }

  componentWillReceiveProps(nextProps) {
    this.setState({
        treeData: nextProps.data.categories.present,
    });
  }

  selectCategory (node) {
    this.selectedCategoryTitle = node.title;
    this.selectedCategoryTodosCount = node.todos.length;
    this.props.selectCategory(node.id, node.todos);

    browserHistory.push('/categories/'+node.id);
  }

  render() {
    return (
      <div style={{ height: 400 }}>
        # categories: <b>{this.props.data.categories.present.length}</b>
        &nbsp;&nbsp;
        Selected category: <b>{this.selectedCategoryTitle}</b>
        &nbsp;&nbsp;
        # todos: <b>{this.selectedCategoryTodosCount}</b>
        <SortableTree
          treeData={this.state.treeData }
          onChange={treeData => this.setState({ treeData })}
          generateNodeProps={rowInfo => ({
            buttons: [
              <button
                style={{ verticalAlign: 'middle' }}
                onClick={() => this.selectCategory(rowInfo.node)}>
                <img src={selectImage} alt="Select category" title="Select category" style={{ height: '20px'}}/>
              </button>,
              <button
                style={{ verticalAlign: 'middle' }}>
                <img src={editImage} alt="Edit category" title="Edit category" style={{ height: '20px'}}/>
              </button>,
              <button
                style={{ verticalAlign: 'middle' }}>
                <img src={deleteImage} alt="Delete category" title="Delete category" style={{ height: '20px'}}
                onClick={() => {if (confirm('Are you sure to delete category?')) this.props.deleteCategory(rowInfo.node.id)}}/>
              </button>,
              <button
                style={{ verticalAlign: 'middle' }}>
                <img src={addImage} alt="Add sub category" title="Add sub category" style={{ height: '20px'}}/>
              </button>,
              <button
                style={{ verticalAlign: 'middle' }}>
                <img src={moveImage} alt="Move task to another category" title="Move task to another category" style={{ height: '20px'}}/>
              </button>,
            ],
          })}
        />
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
  //TODO: extract to \actions\
  return {
    selectCategory: (categoryId, todos) => {
      dispatch({type: 'SELECT_CATEGORY', categoryId: categoryId, todos: todos })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryTree)
