'use client'

import UserCard from '@/components/user-card'
import { User } from '@/interfaces/users'
import { useEffect, useState } from 'react'

interface ApiData {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
}

export default function UsersPage() {
  const [apiData, setApiData] = useState<ApiData>({} as ApiData)
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data.data)
      setApiData(data)
    })
  }, [])

  async function fetchUsers(pageIndex: number = 1) {
    const response = await fetch(
      `https://reqres.in/api/users?page=${pageIndex}`,
    )
    return response.json()
  }

  function loadMore() {
    fetchUsers(apiData.page + 1).then((data) => {
      setUsers([...users, ...data.data] as User[])
      setApiData(data)
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <div className="grid grid-cols-3 gap-8 m-8">
        {users.map((user: User) => {
          return <UserCard key={user.id} user={user} />
        })}
      </div>
      <button
        className={`bg-teal-700 ${
          apiData.total_pages === apiData.page ? 'bg-opacity-40' : ''
        } rounded-lg p-2`}
        onClick={loadMore}
        disabled={apiData.total_pages === apiData.page}
      >
        Load more
      </button>
    </div>
  )
}
