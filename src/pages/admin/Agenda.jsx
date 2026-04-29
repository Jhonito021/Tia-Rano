import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
// import './Agenda.css';

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

export default function Agenda() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const appointments = [
    { date: 25, client: 'Jean Dupont', heure: '09:00', service: 'Vidange' },
    { date: 25, client: 'Marie Rakoto', heure: '14:00', service: 'Freinage' },
  ];

  const getAppointmentsForDay = (day) => appointments.filter(a => a.date === day);

  return (
    <div className="agenda-page">
      <div className="page-header">
        <h1 className="page-title">Agenda des rendez-vous</h1>
        <Button icon={<FontAwesomeIcon icon={faPlus} />}>Nouveau rendez-vous</Button>
      </div>

      <Card className="calendar-container">
        <div className="calendar-header">
          <button onClick={prevMonth}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <h2>{monthNames[month]} {year}</h2>
          <button onClick={nextMonth}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>

        <div className="calendar-weekdays">
          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => <div key={day} className="weekday">{day}</div>)}
        </div>

        <div className="calendar-days">
          {Array.from({ length: firstDay === 0 ? 6 : firstDay - 1 }, (_, i) => <div key={`empty-${i}`} className="calendar-day empty"></div>)}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const dayAppointments = getAppointmentsForDay(day);
            return (
              <div key={day} className={`calendar-day ${selectedDate === day ? 'selected' : ''}`} onClick={() => setSelectedDate(day)}>
                <span className="day-number">{day}</span>
                {dayAppointments.map((apt, idx) => <div key={idx} className="appointment-indicator">{apt.client} - {apt.heure}</div>)}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}