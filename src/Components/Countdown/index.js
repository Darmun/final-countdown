import React from 'react';
import moment from 'moment';
import Controls from './Controls';
import Timer from './Timer';
import Datepicker from '../Datepicker';

export default class extends React.Component {
    state = {
        currentDate: moment(),
        submittedDate: moment({year: moment().year() + 1 }),
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
        this.setState(({paused}, props) => {
            paused = !paused;
            if (paused) {
                this.pauseTimer();
            }
            else {
                this.resumeTimer();
            };

            const nextState = {
                paused
            };

            !paused && (nextState.currentDate = moment());

            return nextState;
        })
    };

    pauseTimer() {
        clearInterval(this.interval);
    };

    resumeTimer() {
        this.interval = setInterval(() => {
            this.setState({
                currentDate: moment()
            })
        }, 1000);
    };

    handleDateSubmit = (newDate) => {
        this.setState({
            submittedDate: newDate
        });
    };


    render() {
        const {paused, submittedDate, currentDate} = this.state,
            duration = this.getRemainingTime();

        return (
            <section className="hero is-dark is-bold is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            {submittedDate.format('LL')} is coming!
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
                        <section className="section">
                            <p>
                                {currentDate.format('LLLL')}
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        )
    }
}