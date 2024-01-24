import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'
import { getUsers } from '../redux/action'

const UserList = () => {
    const {users}=useSelector(state=>state )
    const dispatch=useDispatch();
    useEffect(() => {
   dispatch(getUsers())
    }, [])
    
  return (
    <div>
        {
            React.Children.toArray(users.map(el=><UserCard user={el} />))
        }
        
    </div>
  )
}

export default UserList