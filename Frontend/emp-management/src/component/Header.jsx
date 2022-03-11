import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';


export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    
  }
  render() {
    return (
      <div className='header'>
        <Link to="/">
          <h1>Employee Management</h1>
        </Link>
      </div>
    )
  }
}
