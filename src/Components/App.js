import React from "react";

import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import DisplayVideos from "./DisplayVideos";
import './Styles/App.css';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state={Videos:null,SelectedVideoId:null, SelectedVideoTitle:'',videoDescription:''};
    }
    
    ImagesResult_Callback = (result) => {
        this.setState({videos:result.data.items});
    }

    LoadVideo = (videoId, videoTitle, videoDescription) => {
        this.setState({SelectedVideo:videoId, SelectedVideoTitle:videoTitle, videoDescription});
    }

    render(){
        return(
            <div id="content-holder">
                <SearchBar ResultCallback = {this.ImagesResult_Callback}/>
                <div id="videos-area">
                    <DisplayVideos Videos = {this.state.videos} DisplayVideoCallback={this.LoadVideo}/>
                    <VideoPlayer Video = {this.state.SelectedVideo} VideoTitle={this.state.SelectedVideoTitle} videoDescription={this.state.videoDescription}/>
                </div>  
            </div>
        );
    }

}

export default App;