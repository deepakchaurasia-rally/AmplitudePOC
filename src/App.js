import logo from './logo.svg';
import './App.css';
import amplitude from 'amplitude-js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    amplitude.getInstance().init("f8ed892636f7e9058236f551fa08e884");
  }, []);
  const PCY_DECAY_NESTED = "PCY_DECAY_NESTED";
  const PCY_DECAY_ARRAY = "PCY_DECAY_ARRAY";
  const pcpDecayOccured = {
    "pcpDataDecayed": "true",
    "decayData": [
      { "depId": "00", pcpId: "172212" },
      { "depId": "01", pcpId: "37812" }
    ]
  };
  const pcpDecayVariant1 = {
    pcpIds: ['009999', '0011111'],
    depIds: ['01', '02'],
  }
  const sendEventArrayOfObject = () => {
    amplitude.getInstance().logEvent(PCY_DECAY_NESTED, pcpDecayOccured);
  }

  const sendEventArray = () => {
    amplitude.getInstance().logEvent(PCY_DECAY_ARRAY, pcpDecayVariant1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <button style={{
          margin: '3rem',
          padding: '0.5rem',
        }} type="button" onClick={() => sendEventArrayOfObject()}>I AM NOT PROPER</button>
        <button style={{
          margin: '3rem',
          padding: '0.5rem',
        }} type="button" onClick={() => sendEventArray()}>PROPER TRACK</button>
      </header>
    </div>
  );
}

export default App;
