import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faCar, faClock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import './Accueil.css';

export default function Accueil() {
  return (
    <div className="accueil">
      <div className="hero">
        <h1>Garage Auto-Moto</h1>
        <p>Votre expert en réparation et entretien de véhicules à Madagascar</p>
        <Link to="/connexion" className="hero-btn">Espace client</Link>
      </div>

      <div className="features">
        <div className="feature">
          <FontAwesomeIcon icon={faWrench} />
          <h3>Réparation expert</h3>
          <p>Diagnostic précis et réparation rapide</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faCar} />
          <h3>Tous véhicules</h3>
          <p>Auto, moto, 4x4, utilitaire</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faClock} />
          <h3>Rendez-vous en ligne</h3>
          <p>Réservez votre créneau facilement</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faShieldAlt} />
          <h3>Garantie</h3>
          <p>Pièces et main-d'œuvre garanties</p>
        </div>
      </div>
    </div>
  );
}