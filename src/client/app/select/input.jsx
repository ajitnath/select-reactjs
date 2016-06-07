import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state  = {
      input:''
    }
  }

  handleSubmit(text) {
    this.props.cb(text);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
    this.handleSubmit(e.target.value);
    console.log(this.state.input);
  }

  render () {
    return (
        <input type="text" className="form-group" placeholder={this.props.placeholder} value={this.props.text_value} onChange={(e) => (this.handleChange(e))}/>
      );
  }
}

export default Input