import React, { Component } from 'react';
import '../styles/style.scss';
import '../styles/component.scss';
import Select from 'react-select';
import Sum from './sum';
import Multiply from './multiply';
import Prime from './prime';
import Fibonacci from './fibonacci';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: null,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(tab) {
        this.setState({
            tab,
        })
    }

    options = [
        {
            value: 1,
            label: 'Sum'
        },
        {
            value: 2,
            label: 'Mutliply'
        },
        {
            value: 3,
            label: 'Prime Number'
        },
        {
            value: 4,
            label: 'Fibonacci'
        }
    ]

    render() {
        const { tab } = this.state;
        const content = () => {
            if (tab === 1) {
                return (
                    <Sum tab={tab} />
                );
            } if (tab === 2) {
                return (
                    <Multiply tab={tab} />
                );
            } if (tab === 3) {
                return (
                    <Prime tab={tab} />
                );
            } if (tab === 4) {
                return (
                    <Fibonacci tab={tab} />
                );
            };
        }

        return (
            <div className="wrapper">
                <div className="header">
                    <Select
                        classNamePrefix="select"
                        onChange={tab => this.handleChange(tab.value)}
                        options={this.options}
                        placeholder="Choose or type your case..."
                        isSearchable
                        defaultValue={tab}
                    />
                </div>
                <div className="content">
                    {content()}
                </div>
            </div>
        )
    }
}
export default Index;