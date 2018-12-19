import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
export default class Music extends React.Component {
    render() {
        return (
            <ReactAudioPlayer
                src="merry.mp3"
                controls
            />
        )
    }
}