import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faUser, faCar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/common/Button';
// import Input from '../../components/common/Input';
import Card from '../../components/common/Card';
// import './PriseRendezVous.css';

const services = [
  { id: 1, nom: 'Vidange', duree: '30 min', prix: '35 000 Ar' },
  { id: 2, nom: 'Freinage', duree: '1h', prix: '65 000 Ar' },
  { id: 3, nom: 'Révision complète', duree: '2h', prix: '120 000 Ar' },
  { id: 4, nom: 'Pneus', duree: '45 min', prix: '25 000 Ar' },
];

const vehicules = [
  { id: 1, nom: 'Toyota Corolla - 1234 TAN' },
  { id: 2, nom: 'Honda CBR 500 - 5678 FIA' },
];

export default function PriseRendezVous() {
  const [selectedVehicule, setSelectedVehicule] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [heure, setHeure] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Rendez-vous pris avec succès !');
  };

  return (
    <div className="prise-rdv">
      <h1 className="page-title">Prendre rendez-vous</h1>

      <Card className="rdv-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><FontAwesomeIcon icon={faCar} /> Véhicule</label>
            <select value={selectedVehicule} onChange={(e) => setSelectedVehicule(e.target.value)} required>
              <option value="">Sélectionnez un véhicule</option>
              {vehicules.map(v => <option key={v.id} value={v.id}>{v.nom}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label><FontAwesomeIcon icon={faUser} /> Service</label>
            <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
              <option value="">Sélectionnez un service</option>
              {services.map(s => <option key={s.id} value={s.id}>{s.nom} - {s.duree} - {s.prix}</option>)}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><FontAwesomeIcon icon={faCalendarAlt} /> Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="form-group">
              <label><FontAwesomeIcon icon={faClock} /> Heure</label>
              <input type="time" value={heure} onChange={(e) => setHeure(e.target.value)} required />
            </div>
          </div>

          <Button type="submit" variant="primary" fullWidth>Confirmer le rendez-vous</Button>
        </form>
      </Card>
    </div>
  );
}