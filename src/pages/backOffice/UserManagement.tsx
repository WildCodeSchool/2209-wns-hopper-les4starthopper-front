import { useQuery } from "@apollo/client";
import { getUsers } from "../../graphql/users.server";
import { IUser } from "../../graphql/interfaces/user";

interface UsersData {
  FindAllUsers: IUser[];
}

function UserManagement() {
  const { loading, error, data } = useQuery<UsersData>(getUsers);
  console.log(data);
  if (!data) {
    return <p>Aucune donnée trouvée</p>;
  }
  console.log("hello");
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Adresse email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.FindAllUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button>Supprimer</button>
              <button>Modifier</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserManagement;
