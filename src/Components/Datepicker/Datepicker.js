import React from 'react';
import moment from 'moment';

export default class extends React.Component {
    state = {
        date: '',
        valid: true
    }

    handleDateChange = ({target:{value}}) => {
const valueToDate = moment(value);

        this.setState({
            date: value,
            valid: valueToDate.isValid()
        })
    }

    onDateSubmit = (e) => {
        e.preventDefault();
        if(this.state.valid){
        this.props.onDateSubmit(moment(this.state.date));
        }
        else{
            console.log("Invalid date.")
        }
    }

    render() {
        const {date} = this.state;

        return (<form
            className="field is-grouped is-grouped-centered"
            style={{ marginBottom: 30 }}
            >
            <p className="control">
                <input
                    className="input is-medium is-rounded"
                    value={date}
                    placeholder="Pick a date.."
                    onChange={this.handleDateChange}
                    />
            </p>
            <p className="control">
                <button
                    className="button is-light is-medium is-rounded is-outlined"
                    onClick={this.onDateSubmit}
                    >
                    Reset
                </button>
            </p>
        </form>
        )
    }
}