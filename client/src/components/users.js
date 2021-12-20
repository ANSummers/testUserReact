import * as React from "react";
import axios from "axios";
import "./layout.css";
import Layout from "./layout";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [all_users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  const getAllUsers = () => {
    const ENDPOINT = "http://localhost:9000/users/";
    axios(ENDPOINT)
      .then((response) => {
        console.log("RES", response.data);

        if (response.data) {
          console.log("all_users: " + all_users);

          setUsers(response.data);
        } else {
          console.log("An error happened. over here!");
        }
      })
      .catch((error) => {
        console.log("An error happened. Hey hey!", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const allusers = isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <div>
        <table>
          <thead>
            <tr>
              <td>Username</td>
              <td>Given Name</td>
              <td>Surname</td>
              <td>Date of Birth</td>
              <td>Time Stamp</td>
            </tr>
          </thead>
          <tbody>
            {all_users.map(function (element) {
              return (
                <tr key={element.username}>
                  <td> {element.username} </td>
                  <td> {element.givenName} </td>
                  <td> {element.surname} </td>
                  <td> {element.DateOfBirth} </td>
                  <td> {element.createdAt} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="App">
      <Layout pageTitle="Users" pageHeading="User Dashboard">
        <button className="button">
          <Link to="/createUser" className="nav-link-text">
            Add New User
          </Link>
        </button>
        {/* include onClick on the button for add new form */}
        <p className="heading">All Current Users:</p>
        {allusers}
      </Layout>
    </div>
  );
};
export default UsersPage;
