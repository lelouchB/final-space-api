import React from 'react'
import CardList from "./CardList";
import InfoContainer from "./InfoCointainer";

function Body(){
    return(
        <main>
            <div className="container">
                <InfoContainer/>
                <CardList/>
            </div>
        </main>
    )
}

export default Body