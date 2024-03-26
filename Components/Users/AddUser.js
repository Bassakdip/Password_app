import React, { useState } from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import Error from '../UI/Error';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPass, setEnteredPass] = useState('');
    const [error, setError] = useState('');
    

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (enteredTitle.trim().length === 0 || enteredPass.trim().length === 0 ) {
            setError({
                title: 'Invalid Title',
                message: 'Please enter a valid Title and Password (non-empty values).'
            })
            return;
        }
        props.onAddUser(enteredTitle, enteredPass );
        localStorage.setItem('user', JSON.stringify({title: enteredTitle, password: enteredPass}))
        setEnteredTitle('');
        setEnteredPass('');
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const passChangeHandler = (event) => {
        setEnteredPass(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="name">Title:-</label>
                    <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler} />

                    <label htmlFor="pass">Password:-</label>
                    <input type="text" id="pass" value={enteredPass} onChange={passChangeHandler} />

                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </div>
    );
}
export default AddUser;
