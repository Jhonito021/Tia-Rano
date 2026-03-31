import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faSpinner, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/common/Card';
import './SuiviReparations.css';

const interventions = [
  { id: 1, vehicule: 'Toyota Corolla', service: 'Vidange', date: '2024-03-25', statut: 'en_cours' },
  { id: 2, vehicule: 'Honda CBR', service: 'Freinage', date: '2024-03-20', statut: 'termine' },
];

const getStatusInfo = (statut) => {
  switch(statut) {
    case 'en_attente': return { icon: faClock, text: 'En attente', color: 'orange' };
    case 'en_cours': return { icon: faSpinner, text: 'En cours', color: 'blue' };
    case 'termine': return { icon: faCheckCircle, text: 'Terminé', color: 'green' };
    default: return { icon: faWrench, text: 'Inconnu', color: 'gray' };
  }
};

export default function SuiviReparations() {
  return (
    <div className="suivi-reparations">
      <h1 className="page-title">Suivi des réparations</h1>

      <div className="interventions-list">
        {interventions.map((i) => {
          const status = getStatusInfo(i.statut);
          return (
            <Card key={i.id} className="intervention-card">
              <div className="intervention-header">
                <h3>{i.vehicule}</h3>
                <span className={`status-badge status-${status.color}`}>
                  <FontAwesomeIcon icon={status.icon} /> {status.text}
                </span>
              </div>
              <p className="intervention-service">{i.service}</p>
              <p className="intervention-date">Déposé le : {i.date}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}