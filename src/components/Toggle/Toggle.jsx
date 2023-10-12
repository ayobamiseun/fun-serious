import React, {useState} from 'react'
import './Toggle.css'
function Toggle({ label, toggled, onClick }) {
  const [isToggled, toggle] = useState(toggled);
  // set toggle function (🚀)
  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label>
      <input className='input-toggle' type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span></span>
      <strong>{label}</strong>
    </label>
  );

}

export default Toggle
