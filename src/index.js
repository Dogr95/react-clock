import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Clock extends React.Component {
	constructor() {
		super();
		this.state = {
			date: new Date(),
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => this.tick(), 1000);
	}

	tick() {
        this.setState({
			date: new Date(),
		});
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	formatTime() {
		const date = this.state.date;
		let weekDay = "";
		switch (date.getDay()) {
			case 1:
				weekDay = "Monday";
				break;
			case 2:
				weekDay = "Tuesday";
				break;
			case 3:
				weekDay = "Wednesday";
				break;
			case 4:
				weekDay = "Thursday";
				break;
			case 5:
				weekDay = "Friday";
				break;
			case 6:
				weekDay = "Saturday";
				break;
			case 7:
				weekDay = "Sunday";
				break;
			default:
				weekDay = "?";
		}
		let day = date.getDate();
		switch (day) {
			case 1:
				day += "st";
				break;
			case 2:
				day += "nd";
				break;
			case 3:
				day += "rd";
				break;
			default:
				day += "th";
				break;
		}
		let month = date.getMonth();
		switch (month) {
			case 0:
				month = "January";
				break;
			case 1:
				month = "February";
				break;
			case 2:
				month = "March";
				break;
			case 3:
				month = "April";
				break;
			case 4:
				month = "May";
				break;
			case 5:
				month = "June";
				break;
			case 6:
				month = "July";
				break;
			case 7:
				month = "August";
				break;
			case 8:
				month = "September";
				break;
			case 9:
				month = "October";
				break;
			case 10:
				month = "November";
				break;
			case 11:
				month = "December";
				break;
			default:
				month = "";
		}
		const year = date.getFullYear();
		return `${weekDay}, ${day} of ${month} ${year}`;
	}

	render() {
        let className = "bg";
        let hours = this.state.date.getHours();
        // between 5 AM and 8 AM = dawn
        if(hours >= 5 && hours < 8) {
            className += " dawn"
        // between 8 AM and 17 AM = day
        } else if(hours >= 8 && hours < 17 ) {
            className += " day"
        } else if(hours >= 17 && hours < 20) {
            className += " dusk"
        } else if(hours >= 20 || hours < 5) {
            className += " night"
        }
		return (
            <div className={className}>
                <div className="clock">
                    <h1>{this.formatTime()}</h1>
                    <h1>{this.state.date.toLocaleTimeString()}</h1>
                </div>
            </div>
		);
	}
}

ReactDOM.render(<Clock />, document.getElementById("root"));
