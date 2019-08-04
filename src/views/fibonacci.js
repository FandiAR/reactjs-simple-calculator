import React, { Fragment, Component } from 'react';
import { firstFibonacci } from '../utils/helper';

class Fibonacci extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: Number(e) })
    }

    render() {
        let { input } = this.state;
        input = input - 1;
        const arr = firstFibonacci(input);
        let result;

        if (arr.length > 0) {
            result = (arr.join(', '));
        }

        return (
            <Fragment>
                <div className="disflex">
                    <label>Input:</label>
                </div>
                <div className="disflex">
                    <input
                        type="number"
                        onChange={e => this.handleChange(e.target.value)}
                    />
                </div>
                <div className="disflex">
                    <label style={{ marginTop: '40px' }}>Result</label>
                </div>
                <div className="disflex">
                    <input className="w-100" disabled value={result} />
                </div>
            </Fragment>
        );
    }
}
export default Fibonacci;