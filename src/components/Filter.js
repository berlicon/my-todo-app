import React, { Component } from 'react';
import { connect } from 'react-redux'

class Filter extends Component {
  changeIsDone = () => {
      this.props.changeIsDone(this.chkShowDone.checked);
  }

  changeFilter = () => {
      this.props.changeFilter(this.txtFilter.value);
  }

  render() {
    return (
      <div>
        <label>
          <input type="checkbox"
            checked={this.props.data.isDone}
            ref={node => { this.chkShowDone = node }}
            onChange={this.changeIsDone}
          />
          Show done
        </label>
        &nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="Search"
          ref={node => { this.txtFilter = node }}
          value={this.props.data.filter}
          onChange={this.changeFilter}/>
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
    changeIsDone: (value) => {
      dispatch({type: 'CHANGE_IS_DONE', isDone: value})
    },
    changeFilter: (value) => {
      dispatch({type: 'CHANGE_FILTER', filter: value})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
