import React from 'react'
import Text from './input.jsx'
import Options from './options.jsx'
import _ from 'lodash'

// I am using a global array of countries as an example here
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

class ReactSelect extends React.Component {
    

  constructor(props) {
    super(props)
    
    this.state = {
      text_value : "", 
      options_array: [],
      options_showing: false,
      option_value:""

    }

    _.bindAll(this, 'setInput', 'setOption')
  }

  componentDidMount() {
    // SETS THE VALUE TO THE LENGTH OF THE ARRAY
    this.setState({options_array: country_list})
  }

  componentDidUpdate() {
    //
  }

  filterOptions(text) {
      // TODO escape the string to create a usable regular expression

      // Construct the regular expression
      let regex = new RegExp(`(?=.*${text})`, 'ig');
      console.log(regex);
      let filtered = country_list.filter(function(item){
        return regex.test(item);
      });
      console.log(filtered)
      
      this.setState({options_array:filtered})
  }

  setInput(text) {  
      // Set input
  
      if (text === "") {
        this.setState({options_showing:false, text_value: ""})
      }
      else {
        this.setState({options_showing:true, text_value: text})
        this.filterOptions(text) 
      }
      
  }

  setOption(option) {
    this.setState({text_value:option, options_showing:false})
    console.log("Current option is", option)

  }

  handleBlur() {
    this.setState({text_value:"", options_showing:false})
  }

  render() {
    return(
      <div className="form-group react-select">
        <Text placeholder="Please Select A Country" value={this.state.text_value} onChange={this.setInput} handleBlur={this.handleBlur}/>
        <Options options_showing={this.state.options_showing} options_array={this.state.options_array} onClick={this.setOption} />
      </div>
    );
  }
}

export default ReactSelect