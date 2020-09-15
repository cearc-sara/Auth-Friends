import React, {useState} from 'react';
import Loader from 'react-loader-spinner';

import {axiosWithAuth} from '../utils/axiosWithAuth';

function FriendsList () {
    const [friends, setFriends] = useState([])

    const getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    setFriends(getFriends)

    return(
<div>
    <h2>Friends List</h2>
    <div>
        <p>{friends.name}</p>
    </div>
</div>
    )
}
export default FriendsList