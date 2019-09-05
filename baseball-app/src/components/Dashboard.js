import React from 'react';

function Dashboard({ handleDisplay }) {
  return (
    <div className="container">
      <div className="buttonDashboard">
        <button onClick={() => handleDisplay('strike')}>STRIKES</button>
        <button onClick={() => handleDisplay('ball')}>BALLS</button>
        <button onClick={() => handleDisplay('foul')}>FOULS</button>
        <button onClick={() => handleDisplay('hit')}>HITS</button>
      </div>
    </div>
  );
}

export default Dashboard;
