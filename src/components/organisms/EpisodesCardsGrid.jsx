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
                const limit = 6;
                this.setState({
                    episodes: resp.data.slice(0, limit)
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