import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

class AddEmp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       designation:"",
       warning: false
    }
    this.validate = this.validate.bind(this)
  }
  validate(e){
    e.preventDefault()
    const { navigation } = this.props;
    if(this.state.name !=="" && this.state.name.length>2 && this.state.designation !=="" && this.state.designation.length>3)
      EmployeeService.addEmployee({
        name: this.state.name,
        designation: this.state.designation
      }).then(this.setState({warning: false})).then(()=>navigation("/"))

    
    else{

      this.setState({warning: true})
    }
  }
  render() {
    return (
      <div>
      {this.state.warning && <div className='alert alert-warning'>Name or Designation is too short</div>}
        <form>
          <div className="form-group">
            <label id="exampleInputEmail1">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.name}
              onChange={(e)=>{this.setState({name: e.target.value})}}   aria-describedby="emailHelp" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label id="exampleInputPassword1">Designation</label>
            <input type="text" className="form-control" id="exampleInputPassword1" value={this.state.designation}
                onChange={(e)=>{this.setState({designation: e.target.value})}} placeholder="Enter Designation" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e)=>this.validate(e)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default function AddEmployee(props){

  const navigation = useNavigate();
  const param = useParams();

  return <AddEmp {...props} navigation={navigation} parameter={param}/>;
}
