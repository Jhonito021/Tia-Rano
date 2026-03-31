import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  icon, 
  variant = 'primary', 
  size = 'md',
  onClick, 
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = ''
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
    success: 'btn-success',
    warning: 'btn-warning',
    outline: 'btn-outline',
    ghost: 'btn-ghost'
  };

  const sizes = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  };

  return (
    <button
      type={type}
      className={`btn ${variants[variant]} ${sizes[size]} ${fullWidth ? 'btn-full' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;