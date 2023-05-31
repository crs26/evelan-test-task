'use client'

import UserCard from '@/components/user-card'
import { User } from '@/interfaces/users'
import { useEffect, useState } from 'react'

export default function UsersPage() {
  const [apiData, setApiData] = useState({})
  const [users, setUsers] = useState<User[]>([])
  const [currentApiPage, setCurrentApiPage] = useState(1)
  useEffect(() => {
    fetchUsers(currentApiPage).then((data) => setUsers(data.data))
  }, [])

  async function fetchUsers(pageIndex: number = 1) {
    const response = await fetch(
      `https://reqres.in/api/users?page=${pageIndex}`,
    )
    return response.json()
  }

  function loadMore() {
    fetchUsers(currentApiPage + 1).then((data) => {
      setUsers([...users, ...data.data] as User[])
      setCurrentApiPage(currentApiPage + 1)
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <div className="grid grid-cols-3 gap-8 m-8">
        {users.map((user: User) => {
          return <UserCard key={user.id} user={user} />
        })}
      </div>
      <button className="bg-green-600 rounded-lg p-2" onClick={loadMore}>
        Load more
      </button>
    </div>
  )
}
