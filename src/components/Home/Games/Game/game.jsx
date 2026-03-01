const Game = ({ title, img_url, description, type, platforms }) => {

  const platformStyles = {
    "Playstation 5": "ps",
    "Playstation 4": "ps",
    "Xbox Series X": "xbox",
    "Nintendo Switch Oled": "nintendo",
    "Nintendo Switch": "nintendo"
  };

  return (
    <div className="game-card">
      <img src={img_url} alt={title} className="game-img" />

      <div className="game-body">
        <h5 className="game-title">{title}</h5>
        <p className="game-description">{description}</p>

        <div className="game-footer">
          <span className="game-type">{type}</span>

          <div className="platform-container">
            {platforms?.map((platform) => {
              const styleClass =
                platformStyles[platform.name_platform] || "default";

              return (
                <span
                  key={platform.id}
                  className={`platform-badge ${styleClass}`}
                >
                  {platform.name_platform}
                </span>
              );
            })}
          </div>
          <button className="btn btn-primary mt-3 rounded-pill">
              🎮  Voir le jeu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
