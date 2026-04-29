import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSearch, faCar, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
// import './GestionVehicules.css';

const initialVehicules = [
  { id: 1, client: 'Jean Dupont', marque: 'Toyota', modele: 'Corolla', immatriculation: '1234 TAN', type: 'auto', annee: 2020 },
  { id: 2, client: 'Marie Rakoto', marque: 'Peugeot', modele: '208', immatriculation: '5678 TAM', type: 'auto', annee: 2022 },
  { id: 3, client: 'Andry Raso', marque: 'Honda', modele: 'CBR 500', immatriculation: '9012 FIA', type: 'moto', annee: 2021 },
];

export default function GestionVehicules() {
  const [search, setSearch] = useState('');
  const [vehicules] = useState(initialVehicules); //setVehicues

  const filteredVehicules = vehicules.filter(v => 
    v.marque.toLowerCase().includes(search.toLowerCase()) ||
    v.modele.toLowerCase().includes(search.toLowerCase()) ||
    v.immatriculation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="vehicules-page">
      <div className="page-header">
        <h1 className="page-title">Véhicules</h1>
        <Button icon={<FontAwesomeIcon icon={faPlus} />}>Nouveau véhicule</Button>
      </div>

      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Rechercher par marque, modèle ou immatriculation..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <Card className="vehicules-table-container">
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr><th>Client</th><th>Marque</th><th>Modèle</th><th>Immatriculation</th><th>Type</th><th>Année</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {filteredVehicules.map((v) => (
                <tr key={v.id}>
                  <td>{v.client}</td><td>{v.marque}</td><td>{v.modele}</td><td className="font-medium">{v.immatriculation}</td>
                  <td><span className={`type-badge ${v.type}`}><FontAwesomeIcon icon={v.type === 'auto' ? faCar : faMotorcycle} /> {v.type === 'auto' ? 'Auto' : 'Moto'}</span></td>
                  <td>{v.annee}</td>
                  <td><div className="actions"><button className="action-edit"><FontAwesomeIcon icon={faEdit} /></button><button className="action-delete"><FontAwesomeIcon icon={faTrash} /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}