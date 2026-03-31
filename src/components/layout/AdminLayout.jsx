import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDashboard, faUsers, faCar, faWrench, faBoxes,
  faFileInvoice, faCalendar, faUserCog, faBars,
  faTimes, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../hooks/useAuth';
import './AdminLayout.css';

const menuItems = [
  { path: '/admin', icon: faDashboard, label: 'Tableau de bord' },
  { path: '/admin/clients', icon: faUsers, label: 'Clients' },
  { path: '/admin/vehicules', icon: faCar, label: 'Véhicules' },
  { path: '/admin/interventions', icon: faWrench, label: 'Interventions' },
  { path: '/admin/stock', icon: faBoxes, label: 'Stock' },
  { path: '/admin/factures', icon: faFileInvoice, label: 'Factures' },
  { path: '/admin/agenda', icon: faCalendar, label: 'Agenda' },
  { path: '/admin/employes', icon: faUserCog, label: 'Employés' },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <div className="admin-layout">
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h1>Garage Auto-Moto</h1>
          <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button onClick={logout} className="sidebar-logout">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <div className="admin-header">
          <button className="menu-toggle" onClick={() => setSidebarOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}