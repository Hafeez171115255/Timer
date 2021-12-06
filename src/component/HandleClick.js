import React from "react";


class HandleClick extends React.Component {
  
    state = { date: new Date(), locale: 'bn-BD' };
  
    handleClickEn = () => {
        this.setState({
            
            locale: 'en-US'

        });
    };
    handleClickBn = () => {
        this.setState({

            locale: 'bn-BD'
    
        });
    };
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


    render() {
     
        const { date, locale } = this.state;

        return (
            <>
                <button onClick={this.handleClickEn}> English </button>
                <br />
                <br />
                <button onClick={this.handleClickBn}> Bangla </button>
                <br /><br />
            

                <br /><br />
                <input type="time" placeholder="End" ></input>
                <br /><br />
                <button>start</button>

                <h1 className="heading">
                    <span className="text">
                        {date.toLocaleTimeString(locale)}
                    </span>
                </h1>

            </>
        );
    }
}

export default HandleClick;