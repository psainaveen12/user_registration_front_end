import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faHouse, faTrash} from '@fortawesome/free-solid-svg-icons';


export default function ViewUser() {

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phonenumber:null
    });

    const {id} = useParams();
    const navigate = useNavigate();


    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8081/user/${id}`);
        navigate('/', { replace: true });
    }

    useEffect(()=>{
        loadUser()
    },[]);

    const loadUser = async()=>{
        const result=await axios.get(`http://localhost:8081/user/${id}`);
        setUser(result.data);
    }

  return (
    <div className='conntainer'>
        <div className='row'>
            <div className="col-md-6 offset-3 border rounded p-4 mt-2 shadow">
            <h2 className='text-center m-4'>View User</h2>

            <div className='card'>
                <div className='card-header'>
                    Details of User with ID : {user.id}
                    <ul className='list-group list-group-flush mt-2'>
                        <li className='list-group-item'>
                            <b>Name : </b>
                            {user.name}
                        </li>
                        <li className='list-group-item'>
                            <b>UserName : </b>
                            {user.username}
                        </li>
                        <li className='list-group-item'>
                            <b>Email : </b>
                            {user.email}
                        </li>
                        <li className='list-group-item'>
                            <b>Phone Number : </b>
                            {user.phonenumber}
                        </li>
                    </ul>
                </div>
            </div>
            <Link className="btn btn-primary my-3 mx-2" to={"/"}><FontAwesomeIcon icon={faHouse} /></Link>
            <Link className='btn btn-success mx-2' to={`/edituser/${user.id}`}><FontAwesomeIcon icon={faPenToSquare} /></Link>
            <Link className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}><FontAwesomeIcon icon={faTrash} /></Link>
            </div>
        </div>
    </div>
  );
}
