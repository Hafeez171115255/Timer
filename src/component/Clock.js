import React from "react";
import Button from "./Button";

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
        state = { date: new Date() , locale : 'bn-BD'};
    // }
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clearInterval);
    }
    tick() {
        this.setState({
            date: new Date(),
        })
    }
    handleClick = (locale) => {
        this.setState({
        locale,
        });
    };
    render() {
        return (
            <>
            </>
            // <>
            //     <h1 className="heading">
            //         <span className="text">
            //             Hello World! {this.state.date.toLocaleTimeString(this.props.locale)}
            //         </span>
            //     </h1>
            //     <h1 className="heading">
            //         <span className="text">
            //             Hello - {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}
            //         </span>
            //     </h1>
            //     <button onClick = {this.handleClick}> click here </button>
               
            //     <Button change = {this.handleClick.bind(this ,'en-US')}> button as a component </Button>
            // </>
        );
    }
}

export default Clock;