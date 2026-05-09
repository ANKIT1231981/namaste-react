import { useEffect } from "react";

const User = (props) => {
  const { name, location } = props;

  useEffect(() => {
    // Api call
    getUserInfo();
  })

  async function getUserInfo () {
    const data = await fetch("");
    const json = await data.json();
  }


  return (
    <div className="func-comp">
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h3>Email : ankitkum@1338gmail.com</h3>

    </div>
  );
};

export default User;