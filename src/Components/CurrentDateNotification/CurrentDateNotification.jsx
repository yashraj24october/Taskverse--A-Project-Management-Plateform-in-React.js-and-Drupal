import React, { useState, useEffect } from 'react';

const CurrentDateNotification = () => {
  const [time, setTime] = useState('morning');
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    let date = new Date();
 
let hours;
let minutes;
let seconds
    setInterval(()=>{
   date = new Date();
   hours = date.getHours();
   minutes = date.getMinutes();
   seconds = date.getSeconds();
  const formattedTime = `${hours}:${minutes}:${seconds}`;
   const formattedDate = new Intl.DateTimeFormat('en-US', {
     day: '2-digit',
     month: 'long',
     year: 'numeric'
   }).format(date);
   setCurrentDate(formattedDate + ' ' + formattedTime);
    },1000);

  
    if (hours < 12) {
      setTime('morning');
    } else if (hours < 18) {
      setTime('afternoon');
    } else {
      setTime('evening');
    }
 
  }, []);

  return (
    <div className='current-date-notification'>
      <p className='current-date'>{currentDate}</p>
      {time === 'morning' ? (
        <p className='wish'>Good morning</p>
      ) : time === 'afternoon' ? (
        <p className='wish'>Good Afternoon</p>
      ) : (
        <p className='wish'>Good Evening</p>
      )}
    </div>
  );
};

export default CurrentDateNotification;