async function fetchUsers(pageIndex: number = 1) {
    const response = await fetch(`https://reqres.in/api/users?page=${pageIndex}`);
    return response.json();
}

interface User {
    id: number;
    email: string
    first_name: string
    last_name: string
    avatar: string
}

export default async function UsersPage() {
    let data = await fetchUsers();
    let users = data.data;
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {users.map((user : User) => {
                return (
                <div>{user.first_name}</div>
                )
            })}
        </div>
    )
}