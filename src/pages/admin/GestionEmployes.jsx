import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSearch, faUser, faWrench } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import './GestionEmployes.css';

const initialEmployes = [
  { id: 1, nom: 'Rakoto Michel', poste: 'Mécanicien', telephone: '032 11 22 33', email: 'michel@garage.com', statut: 'Actif' },
  { id: 2, nom: 'Razafy John', poste: 'Mécanicien', telephone: '034 55 66 77', email: 'john@garage.com', statut: 'Actif' },
  { id: 3, nom: 'Andrianaivo Solo', poste: 'Gestionnaire', telephone: '038 99 88 77', email: 'solo@garage.com', statut: 'Actif' },
];

export default function GestionEmployes() {
  const [search, setSearch] = useState('');

  return (
    <div className="employes-page">
      <div className="page-header">
        <h1 className="page-title">Employés</h1>
        <Button icon={<FontAwesomeIcon icon={faPlus} />}>Ajouter employé</Button>
      </div>

      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Rechercher..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <Card className="employes-table-container">
        <div className="table-responsive">
          <table className="data-table">
            <thead><tr><th>Nom</th><th>Poste</th><th>Téléphone</th><th>Email</th><th>Statut</th><th>Actions</th></tr></thead>
            <tbody>
              {initialEmployes.map((e) => (
                <tr key={e.id}>
                  <td className="font-medium">{e.nom}</td><td><FontAwesomeIcon icon={e.poste === 'Mécanicien' ? faWrench : faUser} /> {e.poste}</td><td>{e.telephone}</td><td>{e.email}</td>
                  <td><span className="employe-status status-actif">Actif</span></td>
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