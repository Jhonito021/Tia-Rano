import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
// import './PaiementMobile.css';

const paymentMethods = [
  { id: 'mvola', name: 'Mvola', color: '#00a859', icon: '📱' },
  { id: 'orange_money', name: 'Orange Money', color: '#ff6600', icon: '🟠' },
  { id: 'airtel_money', name: 'Airtel Money', color: '#e60000', icon: '🔴' },
];

const factures = [
  { id: 'FAC-003', montant: '120 000 Ar', description: 'Révision complète - Honda CBR' },
];

export default function PaiementMobile() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [numero, setNumero] = useState('');
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    setTimeout(() => {
      alert('Paiement effectué avec succès !');
      setStep(1);
    }, 2000);
  };

  return (
    <div className="paiement-mobile">
      <h1 className="page-title">Paiement mobile</h1>

      {step === 1 ? (
        <Card className="paiement-form">
          <div className="facture-info">
            <h3>Facture à payer</h3>
            <p className="facture-montant">{factures[0].montant}</p>
            <p className="facture-description">{factures[0].description}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Moyen de paiement</label>
              <div className="payment-methods">
                {paymentMethods.map(m => (
                  <button
                    key={m.id}
                    type="button"
                    className={`payment-method ${selectedMethod === m.id ? 'selected' : ''}`}
                    onClick={() => setSelectedMethod(m.id)}
                    style={{ borderColor: selectedMethod === m.id ? m.color : 'var(--border)' }}
                  >
                    <span style={{ fontSize: '24px' }}>{m.icon}</span>
                    <span>{m.name}</span>
                    {selectedMethod === m.id && <FontAwesomeIcon icon={faCheck} className="check-icon" style={{ color: m.color }} />}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faMobileAlt} /> Numéro de téléphone</label>
              <input type="tel" placeholder="Ex: 032 12 345 67" value={numero} onChange={(e) => setNumero(e.target.value)} required />
            </div>

            <Button type="submit" variant="primary" fullWidth disabled={!selectedMethod}>Payer maintenant</Button>
          </form>
        </Card>
      ) : (
        <Card className="paiement-confirmation">
          <div className="confirmation-icon">✅</div>
          <h2>Paiement en cours...</h2>
          <p>Veuillez confirmer le paiement sur votre téléphone</p>
        </Card>
      )}
    </div>
  );
}