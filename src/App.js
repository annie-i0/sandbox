import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import axios from "axios";
import Users from "./components/Users";

const usersApi = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const App = () => {
  let [number, setNumber] = useState(1);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const grabUsers = async () => {
      setUsers(await usersApi());
    };

    grabUsers();
  }, []);

  if (users.length === 0) {
    return <div>... Loading</div>;
  }

  return (
    <div className="App">
      <Counter number={number} setNumber={setNumber} />
      <Users users={users} number={number} />
    </div>
  );
};

export default App;
