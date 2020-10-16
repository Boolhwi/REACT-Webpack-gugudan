const React = require('react');

class GuGuDan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
            result: ''
        };
    }
    onSubmit = (ev) => {
        ev.preventDefault();
        if (this.state.value == this.state.first * this.state.second) {
            this.setState((prevState) => {
                return {
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: '',
                    result: prevState.value+" 정답!"
                }
            }

            )
        }
        else {
            this.setState(
                {
                    result: "땡!"
                }
            )
        }
    }

    onChange = (ev) => this.setState(
        {
            value: ev.target.value
        }
    )

    render() {
        return (
            <div>
                <div>{this.state.first}곱하기{this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input type="number" value={this.state.value} onChange={this.onChange} />
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </div>
        );
    }
}

module.exports = GuGuDan