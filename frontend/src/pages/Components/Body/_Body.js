import React from 'react'
import CardList from "./_CardList";
import InfoContainer from "./_InfoCointainer";

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