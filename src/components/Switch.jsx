import React, { useState } from "react";
import "./styles/Switch.scss";

function Switch(toggledTheme) {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    return(
      toggledTheme = isToggled
    )
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default Switch;