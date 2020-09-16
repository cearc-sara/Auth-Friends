import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import FriendForm from '../forms/FriendForm'

import { axiosWithAuth } from "../utils/axiosWithAuth";

import '../App.css'

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div >
      <h2>Friends List</h2>
      <div className='list'>
      {friends.map(friend => {
        return(<div className='friend-card'>
        <h3 key={friend.id}>{friend.name}</h3>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
      </div>)})}
      <FriendForm friends={friends} setFriends={setFriends}/>
      </div>
    </div>
  );
}
export default FriendsList;
