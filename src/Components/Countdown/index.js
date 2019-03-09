import React from 'react';
import moment from 'moment';
import Controls from './Controls';
import Timer from './Timer';
import Datepicker from '../Datepicker/Datepicker';


export default class extends React.Component {
    state = {
        currentDate: moment(),
        submittedDate: moment({ year: moment().year() + 1 }),
        paused: false,
    };


    componentDidMount() {
        this.resumeTimer();
    };

    componentWillUnmount() {
        this.pauseTimer();
    };

    getRemainingTime() {
        let {currentDate, submittedDate} = this.state,
            diff = submittedDate.diff(currentDate);

        return moment.duration(diff);
    };

    handleTogglePause = () => {
        this.setState((prevState, props) => {
            const paused = !prevState.paused

            if (paused) {
                this.pauseTimer();
            }
            else {
                this.resumeTimer();
            }
            return {
                paused
            }
        })
    }

    pauseTimer() {
        clearInterval(this.interval);
    };

    resumeTimer() {
        this.interval = setInterval(() => {
            this.setState({
                currentDate: moment()
            })
        }, 1000)
    };

    handleDateSubmit = (newDate) => {
        this.setState({
            submittedDate: newDate
        })
    }

    render() {
        const {paused,submittedDate} = this.state,
               duration = this.getRemainingTime();

        return (
            <section className="hero is-dark is-bold is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {submittedDate.calendar()} is coming!
                        </h1>
                        <div className="section">
                            <Timer
                                duration={duration}
                                />
                        </div>
                        <Datepicker 
                        onDateSubmit={this.handleDateSubmit}
                        />
                        <Controls
                            pause={paused}
                            onPauseToggle={this.handleTogglePause}
                            />
                    </div>
                </div>
            </section>
        )
    }
}