import React from "react";
import Card from './UI/Card';
import "./NewUser.css";

const NewUser = (props) => {
  const getUsers = () => {
    if (props.userData) {
      return props.userData.map((data, index) => (
        <Card className="item-container" key={index}>
          <p className="username">
            {data.username} ({data.age} Years Old)
          </p>
        </Card>
      ));
    }
  };

  return <div>{getUsers()}</div>;
};

export default NewUser;
