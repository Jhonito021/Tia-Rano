import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSearch, faEye } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import './GestionInterventions.css';

const initialInterventions = [
    {id: 1, client: 'Jean Dupont', vehicule: 'Toyota Corolla', date: '2024-03-25', statut: 'En cours', montant: '150 000 Ar'},
    {id: 2, client: 'Harie Rakoto', vehicule: 'Peugeot 208', date: '2024-03-24', statut: 'Terminé', montant: '85 000 Ar'},
    {id: 3, client: 'Adry Raso', vehicule: 'Honda DBR', date: '2024-03-23', statut: 'En attente', montant: '120 000 Ar'}
];

export default function GestionInterventions () {
    const [search, setSearch] = useState('');
    const [interventions, setInterventions] = useState(initialInterventions);

    const getStatusClass = (status) => {
        switch(status) {
            case 'En cours': return 'status-encours';
            case 'Teminé': return 'status-termine';
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
                <FontAwesomeIcon icon={faSearch} className='search-icon'/>
                <input type="text" placeholder='Rechercher...' value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>

            <Card className='interventions-table-container'>
                
            </Card>
        </div>
    )
} 