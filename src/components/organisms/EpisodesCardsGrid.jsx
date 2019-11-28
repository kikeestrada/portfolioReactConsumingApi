import React, { Component } from "react"
import EpisodesCard from "../molecules/EpisodesCard"
import axios from "axios"
class EpisodesCardsGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            episodes: []
        }
    }
    componentDidMount(){
        axios.get('https://breakingbadapi.com/api/episodes')
            .then(resp =>{
                this.setState({
                    episodes: resp.data
                })
            })
    }
    render(){
        const { episodes } = this.state;
        return(
            <>
            {
                episodes.map(
                    u => (
                        <EpisodesCard
                            key     = {u.id}
                            title   = {u.title}
                        />
                    ))
            }
            </>
        )
    }
}

export default EpisodesCardsGrid