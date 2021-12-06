import React from "react";

export default class clickcounter extends React.Component {
    render() {
        const {counter , increamentCount} = this.props;
        return (
            <div>
                <button type="button" onClick={increamentCount}>
                    Clicked {counter} times
                </button>
            </div>
        );
    }
}