import React from "react";
import './Styles/DisplayVideos.css';

class DisplayVideos extends React.Component{
    constructor(props){
        super(props);
        this.videoRef = React.createRef();
    }
 
    Video_Click = (element, videoId, videoTitle, videoDescription) => {
        element.preventDefault();
        this.props.DisplayVideoCallback(videoId, videoTitle,videoDescription);
    }

    Display_videos = () =>{
        const {Videos} = this.props;
        if(!Videos)return;
        const result = Videos.map((element)=>{
            console.log(element.snippet);

            return(
                <a key={element.id.videoId} className="item" onClick={(e) => {this.Video_Click(e,element.id.videoId, element.snippet.title, element.snippet.description)}} ref={this.videoRef}>
                    <div className="ui tiny image">
                        <img src={element.snippet.thumbnails.default.url}/>
                    </div>
                    <div className="middle aligned content">
                        {element.snippet.title}
                    </div>
                </a>
            );
        });
        return result;
    }

    render(){
        return(
            <div className="video-list ui divided items">
                {this.Display_videos()}
                <br></br>
            </div>
        );
    }
}

export default DisplayVideos;


/*

 <div className="item">
                        <div className="ui tiny image">
                            <img src="/images/wireframe/image.png"/>
                        </div>
                        <div className="middle aligned content">
                            Content A
                        </div>
                    </div>
                    <div className="item">
                        <div className="ui tiny image">
                            <img src="/images/wireframe/image.png"/>
                        </div>
                        <div className="middle aligned content">
                            Content B
                        </div>
                    </div>
                    <div className="item">
                        <div className="ui tiny image">
                            <img src="/images/wireframe/image.png"/>
                        </div>
                        <div className="middle aligned content">
                            Content C
                        </div>
                    </div>
*/