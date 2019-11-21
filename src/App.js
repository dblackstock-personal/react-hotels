import React from 'react';
import './App.css';
import Hotel from './components/Hotel.js';
import hotelWarm from './images/hotelWarm.jpg';
import hotelBoring from './images/hotelBoring.jpg';
import personTerry from './images/terry.jpg';
import personOskar from './images/oskar.jpg';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
          <Hotel
          image={hotelWarm}
          rating="★★★★★"
          comment="Words don't express how much I liked this hotel, but in the next 500 words I aim to explain the extent of my appreciation."
          user="Terry from London"
          userImage={personTerry}
          />
          <Hotel
            image={hotelBoring}
            rating="★★★"
            comment="It was alright, not worth the money really"
            user="Oskar from Llandudno"
            userImage={personOskar}
          />
      </div>
    );
  }
}

export default App;