import React from "react";

const Users = (props) => {
  let { users, number } = props;

  return (
    <div className="users">
      {users.slice(0, number).map((user) => {
        return <p>{user.name}</p>;
      })}
    </div>
  );
};

export default Users;
