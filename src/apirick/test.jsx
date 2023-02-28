import React, { useState, useEffect } from 'react';

import "./apirick.css";

function Appe() {

    const [characterList, setCharacterList] = useState([]);

    async function getCharacters() {
        let respuesta = await fetch("https://rickandmortyapi.com/api/character");
        let characters = await respuesta.json();
        setCharacterList(characters.results)
    }

    useEffect(
        () => { getCharacters() },
        []
    )

    return (
        <div className="card">
            <h1>Planet-C136</h1>
            <div className='card-header flex'>
                {
                    characterList.map(rick => (
                        <div>
                            <h5>{rick.name}</h5>
                            <img src={rick.image} alt="/" />
                            <p>{rick.status}</p>
                        </div>
                    )
                    )

                }
            </div>
        </div>);
}

export default Appe;
