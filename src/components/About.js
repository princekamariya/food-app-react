import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h4>This is about page</h4>
            <User  name={"Prins Kamariya"}/>
            <UserClass name={"Prins Kamariya"} location={"Rajkot"}/>
        </div>
    );
};

export default About;
