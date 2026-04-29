import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faWrench, faUsers, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/common/Card';
// import './Dashboard.css';

const stats = [
  { title: 'Véhicules en cours', value: 24, icon: faCar, color: '#2563eb' },
  { title: 'Interventions ce mois', value: 156, icon: faWrench, color: '#22c55e' },
  { title: 'Clients actifs', value: 342, icon: faUsers, color: '#8b5cf6' },
  { title: 'Chiffre d\'affaires', value: '12 450 000 Ar', icon: faMoneyBillWave, color: '#f59e0b' },
];

const recentInterventions = [
  { id: 1, client: 'Jean Dupont', vehicule: 'Toyota Corolla', date: '2024-03-25', statut: 'En cours' },
  { id: 2, client: 'Marie Rakoto', vehicule: 'Peugeot 208', date: '2024-03-24', statut: 'Terminé' },
  { id: 3, client: 'Andry Raso', vehicule: 'Honda CBR', date: '2024-03-23', statut: 'En attente' },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="page-title">Tableau de bord</h1>

      <div className="stats-grid">
        {stats.map((stat) => (
          <Card key={stat.title} className="stat-card">
            <div className="stat-content">
              <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className="stat-info">
                <p className="stat-title">{stat.title}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="dashboard-grid">
        <Card title="Interventions récentes" className="recent-card">
          <table className="recent-table">
            <thead>
              <tr><th>Client</th><th>Véhicule</th><th>Date</th><th>Statut</th></tr>
            </thead>
            <tbody>
              {recentInterventions.map(i => (
                <tr key={i.id}>
                  <td>{i.client}</td><td>{i.vehicule}</td><td>{i.date}</td>
                  <td><span className={`status status-${i.statut.toLowerCase().replace(' ', '')}`}>{i.statut}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card title="Alertes stock" className="alert-card">
          <div className="alert-list">
            <div className="alert-item alert-danger">
              <span>Filtres à huile</span>
              <span className="alert-badge">Stock : 3 unités</span>
            </div>
            <div className="alert-item alert-warning">
              <span>Plaquettes de frein</span>
              <span className="alert-badge">Stock : 8 unités</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}