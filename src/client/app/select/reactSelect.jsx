import React from 'react'
import Input from './input.jsx'
import Options from './options.jsx'
import _ from 'lodash'

class ReactSelect extends React.Component {
    

  constructor(props) {
    super(props)
    
    this.state = {
      text_value : "", 
      options_array: [],
      options_showing: false,
      option_value:""

    }

    _.bindAll(this, 'setInput')
  }

  componentDidMount() {
    // TODO get the json data from the array
    this.setState({options_array: ['Option 1', 'Option 2', 'Option 3', 'Option 4']})
  }

  componentDidUpdate() {
    //
  }

  setInput(text) {  
   // Set input
    this.setState({
      text_value:text
    });
    console.log("state", this.state.text_value)
  }

  render() {
    return(
      <div className="form-group react-select">
        <Input placeholder="Please Select A Country" text_value={this.state.text_value} cb={this.setInput}/>
        { this.props.options_showing &&
        <Options options_showing={this.state.options_showing} options_array={this.state.options_array} cb={this.setInput} />
        }
      </div>

    );
  }
}

export default ReactSelect