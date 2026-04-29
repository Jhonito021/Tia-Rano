import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faCar, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
// import './MesVehicules.css';

const initialVehicules = [
  { id: 1, marque: 'Toyota', modele: 'Corolla', immatriculation: '1234 TAN', type: 'auto', annee: 2020 },
  { id: 2, marque: 'Honda', modele: 'CBR 500', immatriculation: '5678 FIA', type: 'moto', annee: 2021 },
];

export default function MesVehicules() {
  const [vehicules] = useState(initialVehicules); //setVehicules

  return (
    <div className="mes-vehicules">
      <div className="page-header">
        <h1 className="page-title">Mes véhicules</h1>
        <Button icon={<FontAwesomeIcon icon={faPlus} />}>Ajouter un véhicule</Button>
      </div>

      <div className="vehicules-grid">
        {vehicules.map((v) => (
          <Card key={v.id} className="vehicule-card">
            <div className="vehicule-icon">
              <FontAwesomeIcon icon={v.type === 'auto' ? faCar : faMotorcycle} />
            </div>
            <div className="vehicule-info">
              <h3>{v.marque} {v.modele}</h3>
              <p className="immatriculation">{v.immatriculation}</p>
              <p className="annee">Année : {v.annee}</p>
            </div>
            <div className="vehicule-actions">
              <button className="action-edit"><FontAwesomeIcon icon={faEdit} /></button>
              <button className="action-delete"><FontAwesomeIcon icon={faTrash} /></button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}