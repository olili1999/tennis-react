import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Test = () => {
  const { userID } = useParams();
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    const url = `https://jsonplaceholder.typicode.com/users/${userID}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <div>Hello {userID}</div>
      <pre>{JSON.stringify(userData)}</pre>
    </div>
  );
};

export default Test;
