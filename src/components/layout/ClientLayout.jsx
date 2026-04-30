import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCalendarAlt, faHistory, faFileInvoice, faCreditCard, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../hooks/useAuth';
import './ClientLayout.css';

const menuItems = [
  { path: '/client/vehicules', icon: faCar, label: 'Mes véhicules' },
  { path: '/client/rdv', icon: faCalendarAlt, label: 'Prendre RDV' },
  { path: '/client/suivi', icon: faHistory, label: 'Suivi réparations' },
  { path: '/client/historique', icon: faHistory, label: 'Historique' },
  { path: '/client/factures', icon: faFileInvoice, label: 'Mes factures' },
  { path: '/client/paiement', icon: faCreditCard, label: 'Paiement' },
];

export default function ClientLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="client-layout">
      <header className="client-header">
        <div className="client-header-content">
          <h1 className="client-logo">TwentyOne Garage</h1>
          <div className="client-user">
            <FontAwesomeIcon icon={faUser} />
            <span>{user?.nom || 'Client'}</span>
            <button onClick={logout} className="logout-btn">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </div>
        </div>
      </header>

      <nav className="client-nav">
        <div className="client-nav-content">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `client-nav-link ${isActive ? 'active' : ''}`}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <main className="client-main">
        <div className="client-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}