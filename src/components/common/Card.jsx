import React from 'react';
import './Card.css';

const Card = ({ children, title, icon, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {(title || icon) && (
        <div className="card-header">
          {icon && <span className="card-icon">{icon}</span>}
          {title && <h3 className="card-title">{title}</h3>}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;