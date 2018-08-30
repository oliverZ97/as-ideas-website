import React from 'react';

import './Terminal.scss'
import JobService from '../../../services/JobService';

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: false,
            history: [],
            inputText: 'bewerbung abschicken'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.focus = this.focus.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        let history = this.state.history;
        let lastLogin = localStorage.getItem('terminalLastLogin');
        if (lastLogin) {
            fetch('https://api.ipify.org/?format=json')
                .then(response => {
                    return response.json()
                }).then(json => {
                    let dateString = new Date(parseInt(lastLogin)).toISOString();
                    history.push("Last login: " + dateString + ' on ' + json.ip);

                    history.push("Welcome to ideas-cli, the friendly interactive shell")
                    history.push("Type 'help' for instructions on how to use your ideas")

                    this.setState({
                        history
                    })
                })
        } else {
            history.push("Welcome to ideas-cli, the friendly interactive shell")
            history.push("Type 'help' for instructions on how to use your ideas")

            this.setState({
                history
            })
        }
        localStorage.setItem('terminalLastLogin', + new Date());
    }

    handleInputChange(e) {
        let text = e.target.value;
        this.setState({
            inputText: text
        })
    }

    focus() {
        let el = this.terminal;
        this.terminal.focus();

        if (typeof el.selectionStart == "number") {
            el.selectionStart = el.selectionEnd = el.value.length;
        } else if (typeof el.createTextRange != "undefined") {
            el.focus();
            var range = el.createTextRange();
            range.collapse(false);
            range.select();
        }
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            let history = this.state.history;
            history.push(this.state.inputText);
            this.handleCommand(this.state.inputText);

            this.setState({
                history,
                inputText: ''
            })

        }
    }

    handleCommand(command) {
        let history = this.state.history;

        switch (command) {
            case 'bewerbung abschicken':
                this.openAppyPage();
                break;
            case 'rm':
            case 'rm -f':
                this.setState({ inputText: '' })

                history.push('Drop everything from harddrive in 3...');
                this.setState({ history })

                setTimeout(() => {
                    history = this.state.history;
                    history.push('2...');
                    this.setState({ history })
                }, 1000)

                setTimeout(() => {
                    history = this.state.history;
                    history.push('1...');
                    this.setState({ history })
                }, 2000)

                setTimeout(() => {
                    history = this.state.history;
                    history.push("´'`\\_(ಠ_ಠ)_/´'`");

                    this.setState({ history })
                }, 3000)
                break;
            case 'help':
                history.push("Commands: ls/ll, cd, man, whoami, pwd");
                this.setState({ history })
                break;
            case 'ls':
            case 'll':
                JobService.getAllPositions()
                    .then(positions => {
                        history.push(positions);
                        this.setState({ history })
                    })
                break;
            case 'man':
                history.push("We are a studio of developers, designers and product people. We focus on building software for the media industry. We combine technology and agile thinking to create great products people can’t help but love.");
                this.setState({ history })
                break;
            case 'whoami':
                fetch('https://api.ipify.org/?format=json')
                    .then(response => {
                        return response.json()
                    }).then(json => {
                        history.push(json.ip);
                        this.setState({ history })
                    })
                break;
            case 'pwd':
                history.push("/axelspringerideas.de/bewerber");
                this.setState({ history })
                break;
            default:
                if (command.startsWith('cd')) {
                    history.push("There is only one way for you: Forward. Which means: Come to us.");
                    this.setState({ history })
                } else {

                    history.push("Command not found. Type 'help' to see all commands.");
                    this.setState({ history })
                }
                break;
        }
    }

    openAppyPage() {
        setTimeout(() => {
            window.location.href = this.props.url;
        }, 1000)
    }

    render() {


        return (
            <div className='terminal' onClick={this.focus}>
                <div className='terminal__nav'><span /><span /><span /></div>
                <div className='terminal__content'>
                    <div className='terminal__history'>
                        {
                            this.state.history.map(msg => <p key={+ new Date() + '' + Math.random() * 100000}>{'bewerber@ideas:~$: ' + msg}</p>)
                        }
                    </div>
                    <div className='terminal__form'>
                        <p>bewerber@ideas:~$:</p>
                        <input type="text" spellCheck="false" onKeyPress={this.handleKeyPress} value={this.state.inputText} onChange={this.handleInputChange} ref={terminal => { this.terminal = terminal; }} />
                    </div>
                </div>
            </div>
        );
    };
}

export default Terminal;
