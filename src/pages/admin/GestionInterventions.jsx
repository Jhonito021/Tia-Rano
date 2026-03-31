import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSearch, faEye } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import './GestionInterventions.css';

const initialInterventions = [
  { id: 1, client: 'Jean Dupont', vehicule: 'Toyota Corolla', date: '2024-03-25', statut: 'En cours', montant: '150 000 Ar' },
  { id: 2, client: 'Marie Rakoto', vehicule: 'Peugeot 208', date: '2024-03-24', statut: 'Terminé', montant: '85 000 Ar' },
  { id: 3, client: 'Andry Raso', vehicule: 'Honda CBR', date: '2024-03-23', statut: 'En attente', montant: '120 000 Ar' },
];

export default function GestionInterventions() {
  const [search, setSearch] = useState('');
  const [interventions, setInterventions] = useState(initialInterventions);

  const getStatusClass = (statut) => {
    switch(statut) {
      case 'En cours': return 'status-encours';
      case 'Terminé': return 'status-termine';
      default: return 'status-enattente';
    }
  };

  return (
    <div className="interventions-page">
      <div className="page-header">
        <h1 className="page-title">Interventions</h1>
        <Button icon={<FontAwesomeIcon icon={faPlus} />}>Nouvelle intervention</Button>
      </div>

      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Rechercher..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <Card className="interventions-table-container">
        <div className="table-responsive">
          <table className="data-table">
            <thead><tr><th>Client</th><th>Véhicule</th><th>Date</th><th>Statut</th><th>Montant</th><th>Actions</th></tr></thead>
            <tbody>
              {interventions.map((i) => (
                <tr key={i.id}>
                  <td>{i.client}</td><td>{i.vehicule}</td><td>{i.date}</td>
                  <td><span className={`status-badge ${getStatusClass(i.statut)}`}>{i.statut}</span></td>
                  <td>{i.montant}</td>
                  <td><div className="actions"><button className="action-edit"><FontAwesomeIcon icon={faEye} /></button><button className="action-delete"><FontAwesomeIcon icon={faTrash} /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}