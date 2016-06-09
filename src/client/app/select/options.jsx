import React from 'react'


class Options extends React.Component {

  constructor (props) {
    super(props); 
    _.bindAll(this, 'handleClick', 'handleBlur')
  }

  handleClick(element) {
    this.props.onClick(element)
    console.log(element);
  }

  handleBlur(){
    this.props.handleBlur()
    console.log("on blur")
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
          { inputArray.map((element, index) =>  (<li key={index} name={element} onClick={() => this.handleClick(element)}>{element}</li>))}
      </ul>
    ) 
  }
}

export default Options

