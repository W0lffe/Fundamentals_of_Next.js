
export default function UserList({db}){

    return(
        <div>
            <table className="flex flex-col border border-black min-w-xl p-5 bg-white">
                <tbody>
                    <tr className="flex justify-between border p-2">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    {db.map((user, i) => (
                        <tr className="flex justify-between border p-2" key={i}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) 
}