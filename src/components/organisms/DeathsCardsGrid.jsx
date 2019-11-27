import React from "react"
import DeathsCard from "../molecules/DeathsCard"


//Array
const objDeathsCards = [
    {
        id              :1,
        title           : "title1",
        image           : "http://lorempixel.com/400/200/",
    },
    {
        id              :2,
        title           : "title2",
        image           : "http://lorempixel.com/400/200/",
    }
];

const DeathsCardsGrid = () => (
    <>
        {
            objDeathsCards.map( c => < DeathsCard
                key             = {c.id             }
                id              = {c.id             }
                title           = {c.title          }
                image           = {c.image          }
            />)
        }

    </>
);

export default DeathsCardsGrid