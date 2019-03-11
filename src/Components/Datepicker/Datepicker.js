import React from 'react';
import moment from 'moment';

export default class extends React.Component {
    state = {
        date: '',
        valid: true
    }

    handleDateChange = ({target:{value}}) => {
const valueToDate = moment(value),
      valid = valueToDate.isValid() && !isNaN(valueToDate) && valueToDate.isAfter(moment());

        this.setState({
            date: value,
            valid: valid
        })
    }

    onDateSubmit = (e) => {
        e.preventDefault();
        this.state.valid && this.props.onDateSubmit(moment(this.state.date));
  
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