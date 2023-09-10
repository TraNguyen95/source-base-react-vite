import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface User {
  id: number
  a: string
  email: string
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')

      setUsers(result.data)
    }

    fetchData()
  }, [])

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.a} ({user.email})
        </li>
      ))}
    </ul>
  )
}

export default UsersList
