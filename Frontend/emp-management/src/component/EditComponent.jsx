import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const EditComponent = () => {
    const[name, setName]=useState("")
    const[desig,setDesig]=useState("")
    const[warning,setWarning]=useState(false);
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        EmployeeService.getEmployeeById(id).then((res)=>{setName(res.data.name);setDesig(res.data.designation)})
    },[])

    function updateEmp(e){
        e.preventDefault();
        if(name.length > 3 && desig.length >3){
            let obj={
                id: id,
                name: name,
                designation: desig
            }
           EmployeeService.editEmployee(id, obj).then(()=>setWarning(false)).then(navigate("/"))
        }
        else{
            setWarning(true)
        }

    }
  return (
    <div>
    {warning && <div className='alert alert-warning'>Name or Designation is too short</div>}
    <form>
    <div className="form-group">
      <label id="exampleInputEmail1">Name</label>
      <input type="email" className="form-control" id="exampleInputEmail1" value={name}
        onChange={(e)=>setName(e.target.value)}   aria-describedby="emailHelp" placeholder="Enter name" />
    </div>
    <div className="form-group">
      <label id="exampleInputPassword1">Designation</label>
      <input type="text" className="form-control" id="exampleInputPassword1" value={desig}
          onChange={(e)=>setDesig(e.target.value)} placeholder="Enter Designation" />
    </div>
    <button type="submit" className="btn btn-primary" onClick={(e)=>updateEmp(e)}>Submit</button>
  </form>
    </div>
  )
}

export default EditComponent