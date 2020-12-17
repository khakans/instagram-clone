import React, { Component } from "react"

class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RandomUser: [],
        };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=50", {
        "method": "GET",
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                RandomUser: response.results,
            })
        })
        .catch(err => { console.log(err); 
        });
    }

    render(){
        const { RandomUser } = this.state;
        return(
            <div className="Stories">
                {RandomUser.map((getRandomUser, index) => (
                <div key={index} className="Stories_info">
                    <div className="Stories_img">
                        <span>
                            <img src={getRandomUser.picture.medium} alt={getRandomUser.name.first} />
                        </span>
                    </div>
                    <div className="Stories_name">
                        {getRandomUser.name.first}
                    </div>
                </div>
                ))}
            </div>
        )
    }
}

export default Stories