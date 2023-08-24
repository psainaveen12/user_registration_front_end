import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';

export default function AddUser() {

    let navigate = useNavigate();

    const [user, setUser]=useState({
        name:"",
        username:"",
        email:"",
        phonenumber:null
    });

    const{name,username,email,phonenumber}=user

    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8081/user",user);
        navigate("/");
    };

  return (
    <div className='conntainer'>
        <div className='row'>
            <div className="col-md-6 offset-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Register User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-lable'>
                        Name
                        </label>
                        <input
                        type={'text'}
                        className='form-control'
                        placeholder='Enter Your Name'
                        name = "name"
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                        required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Username' className='form-lable'>
                        UserName
                        </label>
                        <input
                        type={'text'}
                        className='form-control'
                        placeholder='Enter Your UserName'
                        name = "username"
                        value={username}
                        onChange={(e)=>onInputChange(e)}
                        required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-lable'>
                        Email
                        </label>
                        <input
                        type={'text'}
                        className='form-control'
                        placeholder='Enter Your Email Id'
                        name = "email"
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                        required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='PhoneNumber' className='form-lable'>
                        Phone Number
                        </label>
                        <input
                        type={'number'}
                        className='form-control'
                        placeholder='Enter Your Phone Number'
                        name = "phonenumber"
                        value={phonenumber}
                        onChange={(e)=>onInputChange(e)}
                        required
                        />
                    </div>
                    <button className='btn btn-outline-primary mx-2'>Submit <FontAwesomeIcon icon={faArrowRightToBracket} /></button>
                    <Link className='btn btn-outline-danger mx-2' to="/">Cancel <FontAwesomeIcon icon={faXmark} /></Link>
                </form>
            </div>
        </div>
    </div>
  )
}
