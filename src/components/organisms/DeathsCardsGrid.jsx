import React, { Component } from "react"
import DeathsCard from "../molecules/DeathsCard"
import axios from "axios"
class DeathsCardsGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            deaths: []
        }
    }
    componentDidMount(){
        axios.get('https://breakingbadapi.com/api/deaths?limit=6&offset=0')
            .then(resp =>{
                const limit = 6;
                this.setState({
                    deaths: resp.data.slice(0, limit)
                })
            })
    }
    render(){
        const { deaths } = this.state;
        return(
            <>
            {
                deaths.map(
                    u => (
                        <DeathsCard
                            key     = {u.id}
                            death   = {u.death}
                        />
                    ))
            }
            </>
        )
    }
}

export default DeathsCardsGrid