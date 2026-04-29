import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSearch, faEnvelope, faPhone, faCar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/common/Button';
// import Input from '../../components/common/Input';
import Card from '../../components/common/Card';
// import './GestionClients.css';

const initialClients = [
  { id: 1, nom: 'Jean Dupont', email: 'jean.dupont@email.com', telephone: '032 12 345 67', vehicules: 2, adresse: 'Antananarivo' },
  { id: 2, nom: 'Marie Rakoto', email: 'marie.rakoto@email.com', telephone: '034 98 765 43', vehicules: 1, adresse: 'Toamasina' },
  { id: 3, nom: 'Andry Raso', email: 'andry.raso@email.com', telephone: '038 55 55 55', vehicules: 3, adresse: 'Fianarantsoa' },
];

export default function GestionClients() {
  const [search, setSearch] = useState('');
  const [clients, setClients] = useState(initialClients);

  const filteredClients = clients.filter(c => 
    c.nom.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Supprimer ce client ?')) {
      setClients(clients.filter(c => c.id !== id));
    }
  };

  return (
    <div className="clients-page">
      <div className="page-header">
        <h1 className="page-title">Clients</h1>
        <Button icon={<FontAwesomeIcon icon={faPlus} />}>Nouveau client</Button>
      </div>

      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Rechercher un client..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Card className="clients-table-container">
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Véhicules</th>
                <th>Adresse</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id}>
                  <td className="font-medium">{client.nom}</td>
                  <td><FontAwesomeIcon icon={faEnvelope} className="table-icon" /> {client.email}</td>
                  <td><FontAwesomeIcon icon={faPhone} className="table-icon" /> {client.telephone}</td>
                  <td><span className="vehicule-badge"><FontAwesomeIcon icon={faCar} /> {client.vehicules}</span></td>
                  <td>{client.adresse}</td>
                  <td>
                    <div className="actions">
                      <button className="action-edit" title="Modifier"><FontAwesomeIcon icon={faEdit} /></button>
                      <button className="action-delete" title="Supprimer" onClick={() => handleDelete(client.id)}><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}