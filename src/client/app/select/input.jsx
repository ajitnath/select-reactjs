import React from 'react';
import _ from 'lodash'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state  = {
      input:''
    }
    _.bindAll(this,'handleSubmit', 'handleChange')
  }

  handleSubmit(text) {
    this.props.onChange(text);
  }

  handleChange(e) {
    this.handleSubmit(e.target.value)  
  }

  render () {
    return (
        <input type="text" className="form-group" placeholder={this.props.placeholder} value={this.props.value} onChange={this.handleChange}/>
      );
  }
}

export default Input