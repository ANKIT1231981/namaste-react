import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props){
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount(){
    // console.log("Parent Component Did Mount");
  }


  render() {
    // console.log("Parent render");
    return (
    <div>
      <h1>AboutUs Page</h1>

      {/* <User name={"Ankit function"} location={"Dehradun function"} /> */}

      <UserClass name={"First"} location={"Dehradun class"} />
      {/* <UserClass name={"Second"} location={"United States"} /> */}
      {/* <UserClass name={"Third"} location={"United States"} /> */}
    </div>
  )
  }
}

export default About;