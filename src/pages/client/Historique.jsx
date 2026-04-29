import React from 'react';
import Card from '../../components/common/Card';
// import './Historique.css';

const historique = [
  { id: 1, vehicule: 'Toyota Corolla', service: 'Vidange', date: '2024-02-10', montant: '35 000 Ar' },
  { id: 2, vehicule: 'Toyota Corolla', service: 'Freinage', date: '2024-01-15', montant: '65 000 Ar' },
  { id: 3, vehicule: 'Honda CBR', service: 'Révision', date: '2023-12-20', montant: '120 000 Ar' },
];

export default function Historique() {
  return (
    <div className="historique">
      <h1 className="page-title">Historique des interventions</h1>

      <Card className="historique-table-container">
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr><th>Véhicule</th><th>Service</th><th>Date</th><th>Montant</th></tr>
            </thead>
            <tbody>
              {historique.map((h) => (
                <tr key={h.id}>
                  <td className="font-medium">{h.vehicule}</td><td>{h.service}</td><td>{h.date}</td><td>{h.montant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}