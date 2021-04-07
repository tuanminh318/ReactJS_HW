import React from 'react';
import Bar from './components/bar';
import Plan from './components/plan';
import './App.css';

function App() {
  let plan = [{
    icon: "fa fa-microphone",
    header: "Basic",
    text: "including all taxes",
    number: 100,
    list: [
      { service: "01 Seat", isActice: true },
      { service: "Tea & Coffee Breaks", isActive: false },
      { service: "Wifi Available", isActive: false },
      { service: "Exclusive Seatings", isActive: false },
    ],
  }]
  let bar = [{
    icon: 'fas fa-microphone',
    number: '36+',
    text: 'Unique Sessions'
  }, {
    icon: 'fas fa-user',
    number: '12',
    text: 'Amazing Speakers'
  }, {
    icon: 'fas fa-coffee',
    number: '45',
    text: 'Food Stalls'
  }, {
    icon: 'fas fa-book',
    number: '2350+',
    text: 'Books Available'
  }]
  return (
    <div className="container mt-5">
      <div className="row" style={{ background: '#e3f7f8', borderRadius: '10px', padding: '10px', margin: '-15px' }}>
        {bar.map(b => <Bar {...b} />)}
      </div>
      <div>
        <div className="container mt-5">
          <div className="row" style={{ background: '#e3f7f8', borderRadius: '10px', padding: '10px', margin: '-15px' }}>
            {plan.map(p => <Plan {...p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
