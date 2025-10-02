import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/princekamariya");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }
    componentDidUpdate() {
        console.log("Component did update called");
    }
    componentWillUnmount() {
        console.log("Component did unmount called");
    }
    render() {
        const { name, location } = this.props;
        const { count } = this.state;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}
                >
                    Add
                </button>
                <h2>{name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @princekamariya</h4>
                <hr />
                <h3>From Github API</h3>
                <h4>{this.state.userInfo.name}</h4>
                <h4>{this.state.userInfo.location}</h4>
                <img src={this.state.userInfo.avatar_url} />
            </div>
        );
    }
}

export default UserClass;
