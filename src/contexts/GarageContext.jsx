import React, { createContext, useState, useContext } from 'react';

const GarageContext = createContext();

export const useGarageContext = () => useContext(GarageContext);

export const GarageProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [vehicules, setVehicules] = useState([]);
  const [interventions, setInterventions] = useState([]);
  const [stock, setStock] = useState([]);
  const [factures, setFactures] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshClients = async () => {
    // Appel API à implémenter
  };

  const value = {
    clients,
    vehicules,
    interventions,
    stock,
    factures,
    loading,
    setClients,
    setVehicules,
    setInterventions,
    setStock,
    setFactures,
    refreshClients,
  };

  return (
    <GarageContext.Provider value={value}>
      {children}
    </GarageContext.Provider>
  );
};