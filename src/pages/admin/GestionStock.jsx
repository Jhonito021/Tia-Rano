import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons'; //faSchoppingCart
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
// import './GestionStock.css';

const initialStock = [
  { id: 1, nom: 'Filtre à huile', reference: 'FH-001', quantite: 12, seuil: 5, prix: '8 500 Ar' },
  { id: 2, nom: 'Plaquettes de frein', reference: 'PF-002', quantite: 8, seuil: 10, prix: '25 000 Ar' },
  { id: 3, nom: 'Huile moteur 5L', reference: 'HM-003', quantite: 3, seuil: 5, prix: '45 000 Ar' },
];

export default function GestionStock() {
  const [search, setSearch] = useState('');
  const [stock] = useState(initialStock); // setStock

  const isLowStock = (quantite, seuil) => quantite <= seuil;

  return (
    <div className="stock-page">
      <div className="page-header">
        <h1 className="page-title">Stock</h1>
        <Button icon={<FontAwesomeIcon icon={faPlus} />}>Ajouter pièce</Button>
      </div>

      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Rechercher..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <Card className="stock-table-container">
        <div className="table-responsive">
          <table className="data-table">
            <thead><tr><th>Nom</th><th>Référence</th><th>Quantité</th><th>Seuil</th><th>Prix unitaire</th><th>Statut</th><th>Actions</th></tr></thead>
            <tbody>
              {stock.map((s) => (
                <tr key={s.id}>
                  <td>{s.nom}</td><td>{s.reference}</td><td>{s.quantite}</td><td>{s.seuil}</td><td>{s.prix}</td>
                  <td>{isLowStock(s.quantite, s.seuil) ? <span className="stock-alert">Stock faible !</span> : <span className="stock-ok">En stock</span>}</td>
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