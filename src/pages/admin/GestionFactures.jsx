import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDownload, faEye, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/common/Card';
// import './GestionFactures.css';

const initialFactures = [
  { id: 'FAC-001', client: 'Jean Dupont', date: '2024-03-25', montant: '150 000 Ar', statut: 'Payée' },
  { id: 'FAC-002', client: 'Marie Rakoto', date: '2024-03-24', montant: '85 000 Ar', statut: 'En attente' },
  { id: 'FAC-003', client: 'Andry Raso', date: '2024-03-23', montant: '120 000 Ar', statut: 'Payée' },
];

export default function GestionFactures() {
  const [search, setSearch] = useState('');

  return (
    <div className="factures-page">
      <h1 className="page-title">Factures</h1>

      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Rechercher une facture..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <Card className="factures-table-container">
        <div className="table-responsive">
          <table className="data-table">
            <thead><tr><th>N° Facture</th><th>Client</th><th>Date</th><th>Montant</th><th>Statut</th><th>Actions</th></tr></thead>
            <tbody>
              {initialFactures.map((f) => (
                <tr key={f.id}>
                  <td className="font-medium">{f.id}</td><td>{f.client}</td><td>{f.date}</td><td>{f.montant}</td>
                  <td><span className={`facture-status ${f.statut === 'Payée' ? 'status-paid' : 'status-pending'}`}>{f.statut}</span></td>
                  <td><div className="actions"><button className="action-edit"><FontAwesomeIcon icon={faEye} /></button><button className="action-edit"><FontAwesomeIcon icon={faDownload} /></button><button className="action-edit"><FontAwesomeIcon icon={faCreditCard} /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}