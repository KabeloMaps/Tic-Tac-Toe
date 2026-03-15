import { useState } from "react";

export default function Players({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" required placeholder="player name" />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </li>
  );
}
