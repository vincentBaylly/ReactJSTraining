const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Claire" },
  { id: 4, name: "David" },
];

function UserList() {
  return (
    <div className="userList">
      {this.props.users.map(({ id, name }) => (
        <a href={`/users/${id}`} key={id}>
          {name}
        </a>
      ))}
    </div>
  );
}

export default UserList;
