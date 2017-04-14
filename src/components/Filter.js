import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Filter extends Component {
  constructor(props) {
        super(props);

        injectTapEventPlugin();
        this.filter = '';
        this.isDone = false;
    }

  changeIsDone = () => {
    this.isDone = !this.isDone;
    this.props.changeIsDone(this.isDone);
  }

  changeFilter = (value) => {
    this.filter = value;
    this.props.changeFilter(this.filter);
  }

  render() {
    return (
      <div>
        <Toggle label="Show done"
          style={{ display: 'inline-block', width: '150px' }}
          onToggle={this.changeIsDone.bind(this)}
          toggled={this.isDone}
          />
        &nbsp;&nbsp;
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
