import React from 'react'


class Options extends React.Component {

  constructor (props) {
    super(props); 
  }

    render() {
      let inputArray = this.props.options_array
      console.log("input array", inputArray);
      return (
        <ul className="hide-show">
        {
          inputArray.map((element, index) => { return (<li key={index}>{element}</li>)})                  
        }
          
        </ul>
      );
    }
}

export default Options

