import gamesData from "../../../data/gamesData";
import Game from "./Game/Game.jsx";
import "./game.scss"



const GamesList = () => {
  return (
    <div className="container">
      <h2 className="subtitle">Mes jeux</h2>
      <div className="row mt-3">
        {gamesData.map((game) => (
          <div className="col-md-4 mb-4" key={game.id}>
            <Game {...game} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesList;
