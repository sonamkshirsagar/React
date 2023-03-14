import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = (props) => {
    props.setInitialPage('signup');
    const[username, setUsername] =useState('');
    const[fullname, setFullname] =useState('');
    const[email, setEmail] =useState('');
    const[phone, setPhone] =useState('');
    const[password, setPassword] =useState('');
    const[errorMessage, setErrorMessage]= useState();
    const ValidateUser =() =>{
        let valid = false;
        if(username !== '' && fullname !== '' && email !== '' && phone !=='' && password !== '' ){
        valid = true ;
    }
    return valid; 
}
    const RagisterUser = () => {
        if (ValidateUser()){
        const users = {
            username: username,
            fullname : fullname,
            email: email,
            phone: phone,
            password: password,
        }
        let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
        userList.push(JSON.stringify(users));
        localStorage.setItem('userList', JSON.stringify(userList));
        console.log('usersList',userList);
        setErrorMessage('')
    }
    else {
        setErrorMessage('Please enter all input field')
    }
}
    return (
        <div>
        <div className="login" >
        <h2>Login</h2>
        <div>{errorMessage}</div>
        <div className="login-control" >
            <label>Username:</label>
            <div className='login-input'>
                <input type="text" name="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
            </div>
            </div>
            <div className="login-control" >
            <label>Fullname:</label>
            <div className='login-input'>
                <input type="Fullname" name="Fullname" value={fullname} onChange={(event) => setFullname(event.target.value)}/>
            </div>
            </div>
            <div className="login-control" >
            <label>Email:</label>
            <div className='login-input'>
                <input type="Email" name="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
            </div>
            <div className="login-control" >
            <label>Phone:</label>
            <div className='login-input'>
                <input type="Phone" name="Phone" value={phone} onChange={(event) => setPhone(event.target.value)}/>
            </div>
            </div>
            <div className="login-control" >
            <label>Password:</label>
            <div className='login-input'>
                <input type="Password" name="Password"value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            </div>
            <div className="login-control" >
            <button type='button' onClick={RagisterUser}>Signup</button>
            </div>
            <div className="login-control" >
            <Link to="/">Back to login screen</Link>
             </div>
            </div>
            </div>
           )
}
export default Signup;