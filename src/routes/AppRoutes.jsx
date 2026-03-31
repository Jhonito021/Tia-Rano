import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

// Layouts
import AdminLayout from '../components/layout/AdminLayout';
import ClientLayout from '../components/layout/ClientLayout';

// Pages publiques
import Accueil from '../pages/Accueil';
import Connexion from '../pages/Connexion';

// Pages Admin
import Dashboard from '../pages/admin/Dashboard';
import GestionClients from '../pages/admin/GestionClients';
import GestionVehicules from '../pages/admin/GestionVehicules';
import GestionInterventions from '../pages/admin/GestionInterventions';
import GestionStock from '../pages/admin/GestionStock';
import GestionFactures from '../pages/admin/GestionFactures';
import Agenda from '../pages/admin/Agenda';
import GestionEmployes from '../pages/admin/GestionEmployes';

// Pages Client
import MesVehicules from '../pages/client/MesVehicules';
import PriseRendezVous from '../pages/client/PriseRendezVous';
import SuiviReparations from '../pages/client/SuiviReparations';
import Historique from '../pages/client/Historique';
import MesFactures from '../pages/client/MesFactures';
import PaiementMobile from '../pages/client/PaiementMobile';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuthContext();
  
  if (loading) return <div className="loading">Chargement...</div>;
  if (!user) return <Navigate to="/connexion" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />;
  
  return children;
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/" element={<Accueil />} />
      <Route path="/connexion" element={<Connexion />} />

      {/* Routes Admin */}
      <Route path="/admin" element={
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="clients" element={<GestionClients />} />
        <Route path="vehicules" element={<GestionVehicules />} />
        <Route path="interventions" element={<GestionInterventions />} />
        <Route path="stock" element={<GestionStock />} />
        <Route path="factures" element={<GestionFactures />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="employes" element={<GestionEmployes />} />
      </Route>

      {/* Routes Client */}
      <Route path="/client" element={
        <ProtectedRoute allowedRoles={['client']}>
          <ClientLayout />
        </ProtectedRoute>
      }>
        <Route index element={<MesVehicules />} />
        <Route path="vehicules" element={<MesVehicules />} />
        <Route path="rdv" element={<PriseRendezVous />} />
        <Route path="suivi" element={<SuiviReparations />} />
        <Route path="historique" element={<Historique />} />
        <Route path="factures" element={<MesFactures />} />
        <Route path="paiement" element={<PaiementMobile />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}