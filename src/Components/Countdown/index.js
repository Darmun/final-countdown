import React from 'react';
import moment from 'moment';
import 'moment-holiday';
import Controls from './Controls';
import Timer from './Timer';
import Datepicker from '../Datepicker/Datepicker';
import HolidaysModal from '../HolidaysModal/HolidaysModal';

export default class extends React.Component {
    state = {
        currentDate: moment(),
        submittedDate: moment({ year: moment().year() + 1 }),
        paused: false,
        showHolidays: false
    };


    componentDidMount() {
        this.resumeTimer();
        this.getHolidays();
    };

    componentWillUnmount() {
        this.pauseTimer();
    };

    getHolidays(){
        const {currentDate, submittedDate} = this.state;

        return currentDate.holidaysBetween(submittedDate);
    }

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

    handleHolidaysToggle = () => {
        this.setState({
            showHolidays: !this.state.showHolidays
        })
    }

    render() {
        const {paused, submittedDate, showHolidays} = this.state,
            duration = this.getRemainingTime(),
            holidays = this.getHolidays();

        return (
            <section className="hero is-dark is-bold is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {submittedDate.calendar()} is coming!
                            <button 
                            className="button is-rounded is-small is-light" 
                            style={{margin: '7px 0px 0px 10px'}}
                            onClick={this.handleHolidaysToggle}
                            >
                                Holidays
                            </button>
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
                        <HolidaysModal
                        holidays={holidays} 
                        active={showHolidays} 
                        onToggle={this.handleHolidaysToggle}/>
                    </div>
                </div>
            </section>
        )
    }
}