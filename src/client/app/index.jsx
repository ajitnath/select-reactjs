import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './headerComponent.jsx'
import ReactSelect from './select/reactSelect.jsx'

class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="container">
        <div className="row text-center">
          <Heading />
          <p>React 2 selectbox using bootstrap that includes searchable options</p>
          <ReactSelect />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('app'));
