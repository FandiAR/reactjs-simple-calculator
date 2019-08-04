import React, { Fragment, Component } from 'react';

class Multiply extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input1: 0,
            input2: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.change = this.change.bind(this);
    }

    handleChange(e) {
        this.setState({input1: Number(e)})
    }
    change(e) {
        this.setState({input2: Number(e)})
    }

    render() {
        const { input1, input2 } = this.state;
        const sum = input1 * input2;
        return (
            <Fragment>
                <div className="disflex">
                    <label>Input 1:</label>
                    <label>Input 2:</label>
                </div>
                <div className="disflex">
                    <input
                        type="number"
                        style={{ float: 'left' }}
                        onChange={e => this.handleChange(e.target.value)}
                        placeholder="Type number..."
                    />
                    {'x'}
                    <input
                    type="number"
                        style={{ float: 'right' }}
                        onChange={e => this.change(e.target.value)}
                        placeholder="Type number..."
                    />
                </div>
                <div className="disflex">
                    <label style={{ marginTop: '40px' }}>
                        Result
                    </label>
                </div>
                <div className="disflex">
                    <input className="w-100" disabled value={sum} />
                </div>
            </Fragment>
        );
    }
}
export default Multiply;