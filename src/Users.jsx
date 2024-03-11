import { useEffect, useState } from "react"

export default function Users(){
  const [user,setUsers] =useState([])
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res =>res.json())
   .then(data => setUsers(data))
  },[])
  return(
    <div>
       <h3>users:{user.length} </h3>
    </div>
  )
}
/**
 * Declare a state to hold the data
 * useEffect with call back and dependency array
 * use fetch to load the data
 */