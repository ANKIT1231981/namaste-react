import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + ' ' + "Child Constructor");

    this.state = {
      // count: 0,
      // count1: 1,
      userInfo: {
        name: "Dummy",
        location: "DumYLocation",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + ' ' + "Child component Did Mount");
    // Api call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
    // console.log(json);
  }
  componentDidUpdate(){
    // console.log("Component Did Update");
  }

  componentWillUnmount(){
    // console.log("Component Will Unmount");
  }


  render() {
    // console.log(this.props.name + ' ' + "Child Render");
    // const {count, count1} = this.state;
    // const {name, location} = this.props;

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="class-comp">
        {/* <h2>Count: {count}</h2>
        <h2>Count1: {count1}</h2>
        <button onClick={()=>{
          this.setState({
            count : this.state.count + 1,
            // count1 : this.state.count1 + 2,
          })
        }}>Increase Count</button>         */}
        <img src={avatar_url} ></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Email: ankitclass@1234gmail.com</h3>
      </div>
    )
  }

};

export default UserClass;