import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/common/Card';
import './MesFactures.css';

const factures = [
  { id: 'FAC-001', date: '2024-03-25', montant: '150 000 Ar', statut: 'Payée' },
  { id: 'FAC-002', date: '2024-02-10', montant: '35 000 Ar', statut: 'Payée' },
];

export default function MesFactures() {
  return (
    <div className="mes-factures">
      <h1 className="page-title">Mes factures</h1>

      <Card className="factures-table-container">
        <div className="table-responsive">
          <table className="data-table">
            <thead><tr><th>N° Facture</th><th>Date</th><th>Montant</th><th>Statut</th><th>Actions</th></tr></thead>
            <tbody>
              {factures.map((f) => (
                <tr key={f.id}>
                  <td className="font-medium">{f.id}</td><td>{f.date}</td><td>{f.montant}</td>
                  <td><span className="facture-status status-paid">{f.statut}</span></td>
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