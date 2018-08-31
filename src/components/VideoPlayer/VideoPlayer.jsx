import React from 'react';

import './VideoPlayer.scss'

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isPlaying: false
        }

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    componentDidMount() {
        this.player.addEventListener("pause", this.pause, true);
    }

    play() {
        this.setState({ isPlaying: true });

        this.player.play();
    }

    pause() {
        setTimeout(() => {
            console.log(this.player.paused)
            if (this.player.paused) {
                this.setState({ isPlaying: false });
                this.player.pause();
            }
        }, 500)
    }


    render() {
        let height = this.state.isPlaying && Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 700 ? this.props.playingHeight : null;

        return (
            <div className='videoPlayer' style={{ height }}>
                {!this.state.isPlaying ? (
                    <img className='videoPlayer__button' onClick={this.play} src={require('./button.svg')} alt="PLAY" />
                ) : null}
                {this.props.thumbnail && !this.state.isPlaying ? (
                    <div className='videoPlayer__overlay' style={{ backgroundImage: `url(${this.props.thumbnail})` }} />
                ) : null}
                <video ref={(player) => { this.player = player }} className='videoPlayer__player' controls src={this.props.src}>
                    Sorry, your browser doesn't support embedded videos,
                    but don't worry, you can <a href={this.props.src}>download it</a>
                    and watch it with your favorite video player!
                </video>
            </div>
        );
    };
}

export default VideoPlayer;



