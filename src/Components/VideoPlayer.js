import React from "react";
import './Styles/VideoPlayer.css';

class VideoPlayer extends React.Component{
    constructor(props){
        super(props);

    }

    Render_emptyPlayer = () =>{
        return(
            <div className="Player">
                <img id="no-video" src="http://torshizitrade.com/wp-content/uploads/2019/01/no-video.jpg"/> 
            </div>
        );
    }

    Display_description = () => {
        return(
            <div id='description-box'>
                <h4 style={{marginBottom:0, padding:0}}>{this.props.VideoTitle}</h4>
                <h6 style={{marginTop:0, padding:0}}>{this.props.videoDescription}</h6>
            </div>
        );
    }

    Load_video = () =>{
        if(!this.props.Video) return this.Render_emptyPlayer();
        return(
            <div className="Player">
                <iframe id="player" type="text/html"  className="Player" style={{width:'100%'}}
                    src={"http://www.youtube.com/embed/" + this.props.Video +"?enablejsapi=1&origin=https://www.youtube.com/watch?v="}
                    frameborder="0"></iframe>
            </div>
        );

    }

    render(){
        return(
            <div>
                {this.Load_video()}
                {this.Display_description()}
            </div>
        );
    }
}

export default VideoPlayer;
