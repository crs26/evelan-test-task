'use client'

import UserCard from '@/components/user-card'
import { User } from '@/interfaces/users'

async function fetchUsers(pageIndex: number = 1) {
  const response = await fetch(`https://reqres.in/api/users?page=${pageIndex}`)
  return response.json()
}

export default async function UsersPage() {
  let data = await fetchUsers()
  let users = data.data

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <div className="grid grid-cols-3 gap-8 m-8">
        {users.map((user: User) => {
          return <UserCard key={user.id} user={user} />
        })}
      </div>
      <button
        className="bg-green-600 p-4"
        onClick={() => console.log('clicked')}
      >
        Load more
      </button>
    </div>
  )
}
