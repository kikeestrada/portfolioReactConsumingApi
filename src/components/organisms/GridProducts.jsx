import React from "react"
import CardProduct from "../molecules/CardProduct"

//Array
const objProducts = [
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


//Array
const objProducts2 = [
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

const GridProducts = () => (
    <>
    <div className="ed-container">
        <div className="ed-item m-60">
            <div className="ed-grid s-grid-1 m-grid-2 l-grid-3">
                {
                    objProducts.map( c => < CardProduct
                        key             = {c.id             }
                        id              = {c.id             }
                        title           = {c.title          }
                        image           = {c.image          }
                    />)
                }
            </div>
        </div>
        <div className="ed-item m-40">
            <div className="ed-grid s-grid-1">
                {
                    objProducts2.map( c => < CardProduct
                        key             = {c.id             }
                        id              = {c.id             }
                        title           = {c.title          }
                        image           = {c.image          }
                    />)
                }
            </div>
        </div>
    </div>

    </>
);

export default GridProducts