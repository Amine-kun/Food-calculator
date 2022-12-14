import react from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import Landing from './Containers/Landing/Landing';
import Authentication from './Containers/Authentication/Authentication';
import Home from './Containers/Home/Home';

function App() {
  return (
    <section className="app app-flex full-v">

          <Routes> 
              <Route path="/*" element={<Landing/>}/>
              <Route path="/Auth/*" element={<Authentication/>}/>
              <Route path="/Home/*" element={<Home/>}/>
          </Routes>

    </section>
  );
}

export default App;
