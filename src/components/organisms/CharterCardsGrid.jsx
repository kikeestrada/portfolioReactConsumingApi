import React, { Component } from "react"
import CharacterCard from "../molecules/CharacterCard"
import axios from "axios"
class CharterCardsGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            chaters: []
        }
    }
    componentDidMount(){
        axios.get('https://breakingbadapi.com/api/characters?limit=6&offset=0')
        // .then(resp => console.log(resp.data))
            .then(resp =>{
                this.setState({
                    chaters: resp.data
                })
            })
    }
    render(){
        const { chaters } = this.state;
        return(
            <>
            {
                chaters.map(
                    u => (
                    <CharacterCard
                        key         = {u.id}
                        name        = {u.name}
                        img    = {u.img}
                    />
                ))
            }
            </>
        )
    }
}

export default CharterCardsGrid