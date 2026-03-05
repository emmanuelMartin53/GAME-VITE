import "./menu.scss"
import { Link } from "react-router-dom";

const Menu = ({ onFilter }) => {

  const platforms = [
    "Playstation 5",
    "Playstation 4",
    "Xbox Series X",
    "Nintendo Switch Oled"
  ];

  return (
    <div className="menu-container">
      <ul className="menu-list">
        {platforms.map((platform) => (
          <li
            key={platform}
            onClick={() => onFilter(platform)}
            className="menu-item"
          >
            {platform}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
