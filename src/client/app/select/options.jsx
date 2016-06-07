import React from 'react'


class Options extends React.Component {

  constructor (props) {
    super(props); 
  }

  render() {
      let visible = this.props.options_showing
      return (
        (visible===true) ? this.renderList() : null
      );
  }

  renderList() {
    let inputArray = this.props.options_array
    return (
      <ul className="hide-show">
          { inputArray.map((element, index) =>  (<li key={index}>{element}</li>))}
      </ul>
    ) 
  }
}

export default Options

