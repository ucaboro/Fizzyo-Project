import React, {Component} from 'react';

class DropdownButtonComp extends Component{

  constructor(props) {
    super(props)
    var options = []
    for (let i=0; i<this.props.option.length; i++){
      options.push(this.props.option[i])
    }
    this.state = {options}
  }

  selectKey(event) {
    this.setState({value: event.target.value})

  }

render(){

  return(


    <select id={this.props.id} onChange={this.selectKey.bind(this)} name={this.state.value} type="button" className="btn btn-default" data-toggle="dropdown" >
        <option defaultValue={this.props.title} disabled selected>{this.props.title}</option>
        {this.state.options.map((name, index) =>(
          <option key={index} value={name}>{name}</option>
        ))}
    </select>
    
  )
}
}



export default DropdownButtonComp;
