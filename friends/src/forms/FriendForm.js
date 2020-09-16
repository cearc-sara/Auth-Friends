import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValue = {
  name: "",
  age: 2,
  email: "",
};

function FriendForm  (props)  {
  const [formValue, setFormValue] = useState(initialValue);

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    const newFriend = {
      name: formValue.name.trim(),
      age: formValue.age.trim(),
      email: formValue.email.trim(),
    };
    postNewFriend(newFriend);
  };

  

  const postNewFriend = (newFriend) => {
    axiosWithAuth()
    .post("/api/friends", newFriend)
    .then((res) => {
      console.log(res);
      props.setFriends(props.friends.concat(res.data))
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setFormValue(initialValue);
    });
  }

  

  return (
    <form onSubmit={submit}>
      <label>Name&nbsp;</label>
      <input 
        name="name" 
        value={formValue.name} 
        type="text" 
        onChange={onChange} />
      <label>Age&nbsp;</label>
      <input 
        name="age" 
        value={formValue.age} 
        type="text" 
        onChange={onChange} />
      <label>Email&nbsp;</label>
      <input
        name="email"
        value={formValue.email}
        type="email"
        onChange={onChange}
      />
      <button>Add Friend</button>
    </form>
  );
};
export default FriendForm;
