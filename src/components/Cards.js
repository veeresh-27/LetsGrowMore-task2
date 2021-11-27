import React from 'react';
import { useEffect,useState } from 'react';
import '../App.css';

const Cards = () => {
    const [users,setUsers]=useState([]);
    const getUsers = async()=>{
        const response = await fetch('https://reqres.in/api/users?page=1');
        const jresponse=await response.json();
        setUsers(jresponse.data);
        
    }
    useEffect(()=>{
        getUsers();
    },[]);
    return(
        users.map((curElem)=>{
                return (
                    <div className="card">
                         <div className="image">
                            <img src={curElem.avatar} alt="Avatar" />
                        </div>
                        <div className="cont">
                            
                            <div className="name"><span>
                                {curElem.first_name +" "+ curElem.last_name}</span>
                            </div>
                            <div className="email">
                                {curElem.email}
                            </div>
                        </div>
                    </div>
                )
            })
    )
}

export default Cards;
