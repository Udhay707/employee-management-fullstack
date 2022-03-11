import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

class EmpList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          employee : []
      }
      this.deleteById = this.deleteById.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployee().then((res)=>{
            this.setState({
                employee : res.data
            })
        })
    }
    deleteById(id){
      window.confirm("Are you sure Do you want to delete ?") 
      ? EmployeeService.deleteEmployee(id).then(()=>window.location.reload(false))
      : console.log("")
    }
  render() {
    return (
      <div>
      <h2>Employee List</h2>
      <Table striped bordered hover size="sm" className="table-props">
      <thead>
        <tr>
          <th className="text-center">Name</th>
          <th className="text-center">Designation</th>
          <th className="text-center">action</th>
        </tr>
      </thead>
      <tbody>
        {
            this.state.employee.map(
                employee => 
                <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                    <td>
                      <Link to={`/edit/${employee.id}`}><button className='btn btn-warning table-btn btn-sm'>Edit</button></Link>
                      <button className='btn btn-danger table-btn btn-sm' 
                          onClick={()=>this.deleteById(employee.id)}>Delete</button>
                    </td>
                </tr>
            )
        }
      </tbody>
    </Table>
    <Link to="/add"><Button className='btm'>Add</Button></Link>
      </div>
    )
  }
}

export default function EmployeeList(props){
  const navigate = useNavigate();
  return <EmpList {...props} navigation={navigate} />
}