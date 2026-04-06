import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../hooks/useAuth';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import './Connexion.css';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulation de connexion (à remplacer par appel API)
    setTimeout(() => {
      if (email === 'admin@garage.com' && password === 'admin123') {
        login({ id: 1, nom: 'Admin', email, role: 'admin' }, 'fake-token');
        navigate('/admin');
      } else if (email === 'client@test.com' && password === 'client123') {
        login({ id: 2, nom: 'Client Test', email, role: 'client' }, 'fake-token');
        navigate('/client');
      } else {
        setError('Email ou mot de passe incorrect');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="connexion-page">
      <div className="connexion-card">
        <div className="connexion-header">
          <h1>Connexion</h1>
          <p>Bienvenue chez TwentyOne Garage</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@email.com"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            required
          />

          <div className="password-wrapper">
            <Input
              label="Mot de passe"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              icon={<FontAwesomeIcon icon={faLock} />}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          {error && <div className="error-message">{error}</div>}

          <Button type="submit" variant="primary" fullWidth disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </Button>
        </form>

        <div className="connexion-footer">
          <p>Comptes de démonstration :</p>
          {/* <p className="demo">Admin : admin@garage.com / admin123</p> */}
          <p className="demo">Client : client@test.com / mdp: client123</p>
        </div>
      </div>
    </div>
  );
}