import react from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import Landing from './Containers/Landing/Landing';
import Authentication from './Containers/Authentication/Authentication';

function App() {
  return (
    <section className="app app-flex full-v">
        <div className="app-container">
          <Routes> 
              <Route path="/*" element={<Landing/>}/>
              <Route path="/Auth/*" element={<Authentication/>}/>
          </Routes>
        </div>
    </section>
  );
}

export default App;
