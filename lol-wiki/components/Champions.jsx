import React from "react";
import "./Champions.css"

// https://ddragon.leagueoflegends.com/cdn/13.14.1/data/pt_BR/champion/${champion}.json

const Champions = ({ infos }) => {

  //console.log(`Essas são as infos ${infos}`)

  return (
    <>
      {infos && (
        infos.map(({ name, id }) => (
          <li className="c-card" key={id}>
            <a href={``}>
              <h1 className="c-card__title">{name}</h1>
              <img className="c-card__image" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`} alt={id} />
            </a>
          </li>
        ))
      )}
    </>
  );
};

export default Champions;
