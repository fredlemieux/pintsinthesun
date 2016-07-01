import React from 'react';
import { Link } from 'react-router';
import Logo from '../../components/logo';

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="Screen Screen--start">

                <div className="Screen-headerWrapper">
                    <div className="Screen-headerSizer">
                        <header className="Screen-header Screen-header--start">
                            <Logo />
                        </header>
                    </div>
                </div>

                <div className="Screen-main">
                    <div className="Box Box-row max-width no-padding">
                        <div className="Box-item no-padding">
                            <a className="Button Button--primary Button--primary--search" onClick={this.props.setNow}>
                                Find the nearest sunny pub
                            </a>
                        </div>
                    </div>
                    <div className="Box Box-row max-width no-padding">
                        <div className="Box-item Prompt text-centre">
                            <span className="Circle-or caps--small">OR</span>
                            <div className="Para--large inner">Find nearby pubs that will be sunny in the&#8230;</div>
                        </div>
                    </div>

                    <div className="Box Box-row max-width">
                        <div className="Box-item no-padding">
                            <a className="Button--morning" onClick={this.props.setMorning}>
                                <span>Morning</span>
                            </a>
                        </div>
                        <div className="Box-item no-padding">
                            <a className="Button--afternoon" onClick={this.props.setAfternoon}>
                                <span>Afternoon</span>
                            </a>
                        </div>
                        <div className="Box-item no-padding">
                            <a className="Button--evening" onClick={this.props.setEvening}>
                                <span>Evening</span>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

Start.propTypes = {
    date: React.PropTypes.instanceOf(Date).isRequired,
    setMorning: React.PropTypes.func.isRequired,
    setAfternoon: React.PropTypes.func.isRequired,
    setEvening: React.PropTypes.func.isRequired,
}

export default Start;
