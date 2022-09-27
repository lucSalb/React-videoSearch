import React from "react";
import GETvideo from "../Api/HttpYoutube"; 
import Loader from '../Components/loader';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {word:'', processing:false};
    }

    Processing = () =>{
        if(this.state.processing) return <Loader/>;
    }
 
    SubmitSearch = async (event) =>{
        event.preventDefault();
        this.setState({processing:true});
        const result = await GETvideo(this.state.word);
        this.props.ResultCallback(result);
        this.setState({processing:false});
    }

    OnChange = (event) =>{
        this.setState({word:event.target.value});
    }

    render(){
        return(
            <form className="ui action input" style={{width:'70%'}} onSubmit={e=>this.SubmitSearch(e)}>
                {this.Processing()}
                <input type="text" placeholder="Search..." value={this.state.word} onChange={e=>this.OnChange(e)}/>
                <button className="ui icon button">
                <i className="search icon"></i>
                </button>
            </form>
        );
    }
}

export default SearchBar;