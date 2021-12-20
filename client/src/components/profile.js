import * as React from "react";

import "./layout.css";
import Layout from "./layout";

const ProfilePage = () => {
  return (
    <div className="App">
      <Layout pageTitle="Profile" pageHeading="Search Profiles">
        This is the Profile Page
      </Layout>
    </div>
  );
};
export default ProfilePage;
