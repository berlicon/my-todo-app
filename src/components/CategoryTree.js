import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';

export default class CategoryTree extends Component {
  constructor(props) {
        super(props);
        this.state = {
            treeData: this.props.data.categories,
        };
    }

  componentWillReceiveProps(nextProps) {
    this.setState({
        treeData: nextProps.data.categories,
    });
  }

 shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <div style={{ height: 400 }}>
        Count of categories: {this.props.data.categories.length}
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
                />
      </div>
    );
  }
}
