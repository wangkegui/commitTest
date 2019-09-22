import React from "react";
class Home extends React.Component {
    state = {
        name: "daniel",
        old: "two"
    };
    render(){
        return (
            <div>
                <header>this is header</header>
                <content>this is body</content>
                <footer>this is footer</footer>
            </div>
        )
    }
}