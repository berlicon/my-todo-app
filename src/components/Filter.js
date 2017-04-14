import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Filter extends Component {
  constructor(props) {
        super(props);

        injectTapEventPlugin();
        this.filter = '';
    }

  changeIsDone = () => {
      this.props.changeIsDone(this.chkShowDone.checked);
  }

  changeFilter = (value) => {
    this.filter = value;
    this.props.changeFilter(this.filter);
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

        <TextField floatingLabelText="Search in todos"
          value={this.filter}
          onChange={e => this.changeFilter(e.target.value)}/>
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
