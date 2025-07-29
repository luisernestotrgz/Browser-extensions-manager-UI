import React from "react"
import "./extensioncard.css"

type ExtensionProps = {
  id?: string;
  icon: string;
  name: string;
  description: string;
  isActive: boolean;
  onRemove: () => void;
  onToggle: () => void;
};

const ExtensionCard: React.FC<ExtensionProps> = ({id, icon, name, description, isActive, onRemove, onToggle}) => {

  return (
    <div className="extension-card">
      <div className="extension-header">
        <div className="extension-icon">
          <img src={icon} alt={`${name} icon`}/>
        </div>
        <div className="extension-info">
          <span className='extension-name'>{name}</span>
          <p className='extension-description'>{description}</p>
        </div>
      </div>

      <div className="extension-footer">
      </div>
        <button className="remove-btn" onClick={onRemove}>Remove</button>
        <label className="toggle-switch">
          <input
            key={id}
            type="checkbox"
            checked={isActive}
            onChange={onToggle}
          />
          <span className={`toggle ${!isActive ? 'inactive' : ''}`}></span>
        </label>
    </div>
  )
};

export default ExtensionCard
