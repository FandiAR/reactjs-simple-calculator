import React, { Fragment, Component } from 'react';
import { firstNPrimes } from '../utils/helper';

class Prime extends Component {
    constructor(props) {
        super(props);

        this.state={
            input: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({input: Number(e)})
    }

    render() {
        const { input } = this.state;
        const arr = firstNPrimes(input);
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
                        placeholder="Type number..."
                    />
                </div>
                <div className="disflex">
                    <label style={{ marginTop: '40px' }}>Result</label>
                </div>
                <div className="disflex">
                    <input className="w-100" disabled defaultValue={result} />
                </div>
            </Fragment>
        );
    }
}
export default Prime;