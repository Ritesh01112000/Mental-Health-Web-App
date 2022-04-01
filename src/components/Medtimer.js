import React from 'react'
import {Link} from 'react-router-dom'

// import ReactDOM from'reactdom'
class Medtimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    let {isLoggedIn} = this.state;
    const option=()=>{
      if(isLoggedIn==='mango'){
        <h1>hyyyy</h1>
      }

    }
    return (
      <div>      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>            
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
     
     if{this.state.value=='mango'}
     {
       <h1>hello</h1>
     }
     
     </div>

     );
  }
}



  export default Medtimer;