import { User } from '@/interfaces/users'
import Image from 'next/image'

/**
 *
 * @param param0 User object to display
 * @returns Returns a user card
 */
export default function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            width={64}
            height={64}
            src={user.avatar}
            alt="Avatar"
            className="w-full h-full object-cover"
            rel="preload"
            loading="lazy"
          />
        </div>
        <div className="">
          <p className="text-gray-600">{user.id}</p>
        </div>
        <div className="">
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="">
          <p className="text-gray-600">
            {user.first_name} {user.last_name}
          </p>
        </div>
      </div>
    </div>
  )
}
