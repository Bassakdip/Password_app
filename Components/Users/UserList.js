import React from 'react'
import Card from '../UI/Card';
import classes from './UserList.module.css'


const UserList =(props)=>{
    
    
    return(
        <Card className={classes.users}>
            <ul>
                <h3>Save Data</h3>
                {props.users.map((user) =>(
                    <li key={user.id}>{user.title} &ensp; {user.pass} &ensp;&ensp;
                        
                        <button>Edit</button>&ensp;
                        <button id={user.id} >Delete</button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};
export default UserList;