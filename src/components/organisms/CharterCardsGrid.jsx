import React from "react"
import CharacterCard from "../molecules/CharacterCard"

//Array
const objCharterCards = [
    {
        id              :1,
        title           : "title1",
        image           : "http://lorempixel.com/400/200/",
    },
    {
        id              :2,
        title           : "title2",
        image           : "http://lorempixel.com/400/200/",
    },
    {
        id              :3,
        title           : "title3",
        image           : "http://lorempixel.com/400/200/",
    },
    {
        id              :4,
        title           : "title4",
        image           : "http://lorempixel.com/400/200/",
    },
    {
        id              :5,
        title           : "title5",
        image           : "http://lorempixel.com/400/200/",
    },
    {
        id              :6,
        title           : "title6",
        image           : "http://lorempixel.com/400/200/",
    },
    {
        id              :7,
        title           : "title7",
        image           : "http://lorempixel.com/400/200/",
    },
    {
        id              :8,
        title           : "title8",
        image           : "http://lorempixel.com/400/200/",
    }
];




const CharterCardsGrid = () => (
    <>
        {
            objCharterCards.map(   c => < CharacterCard
                key             = {c.id             }
                id              = {c.id             }
                title           = {c.title          }
                image           = {c.image          }
            />)
        }
    </>
);

export default CharterCardsGrid