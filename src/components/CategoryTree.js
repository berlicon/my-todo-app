import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import { connect } from 'react-redux'

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

  render() {
    const alertNodeInfo = ({
        node,
        path,
        treeIndex,
        lowerSiblingCounts: _lowerSiblingCounts,
    }) => {
        /*const objectString = Object.keys(node)
            .map(k => (k === 'children' ? 'children: Array' : `${k}: '${node[k]}'`))
            .join(',\n   ');*/

        this.selectedCategoryTitle = node.title;
        this.selectedCategoryTodosCount = node.todos.length;
        this.props.selectCategory(node.id, node.todos);

        /*alert( // eslint-disable-line no-alert
            'Info passed to the button generator:\n\n' +
            `node: {\n   ${objectString}\n},\n` +
            `path: [${path.join(', ')}],\n` +
            `treeIndex: ${treeIndex}`
        );*/
    };

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
                onClick={() => alertNodeInfo(rowInfo)}
              >ℹ</button>,
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

const BindedCategoryTree = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryTree)

export default BindedCategoryTree
