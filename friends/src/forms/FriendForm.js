

import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValue = {
    name: '',
    age: 2,
    email: ''
}

const FriendForm = (props) => {
 const [friend, setFriend] = useState({})
 const [formValue, setFormValue] = useState(initialValue)

 const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
 }

const submit = () => {
    const newFriend = {
        name: '',
        age: 0,
        email: ''
    }
    setFriend(newFriend)
}

 const onSubmit = (e) => {
     e.preventDefault()
     submit()
 }

 useEffect((newFriend) => {
     axiosWithAuth()
     .post('/api/friends', newFriend)
     .then(res => {
         console.log(res)
     })
     .catch(err => {
         console.log(err)
     })
     .finally(() => {
        setFormValue(initialValue)
     })
 },[])

 return(
     <form onSubmit={onSubmit}>
         <label>Name&nbsp;</label>
         <input
         name='name'
         value={friend.name}
         type='text'
        onChange={onChange}
        />
        <label>Age&nbsp;</label>
        <input
        name='age'
        value={friend.age}
        type='text'
        onChange={onChange}
        />
        <label>Email&nbsp;</label>
        <input
        name='email'
        value={friend.email}
        type='email'
        onChange={onChange}
        />
        <button>Add Friend</button>
     </form>
 )

}
export default FriendForm