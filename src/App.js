import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { THome } from './components/Home';
import { TWork1 } from './components/Work1';
import { TWork2 } from './components/Work2';
import { TWork3 } from './components/Work3';
import { TWork4 } from './components/Work4';
import { AnimatePresence } from 'framer-motion';
import { TWork5 } from './components/Work5';
import { TWork6 } from './components/Work6';


function App() {

  const location = useLocation();

  return (
    <div>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route index element={<THome />}/>
          <Route path='/work1/' element={<TWork1 />}/>
          <Route path='/work2/' element={<TWork2 />}/>
          <Route path='/work3/' element={<TWork3 />}/>
          <Route path='/work4/' element={<TWork4 />}/>
          <Route path='/work5/' element={<TWork5 />}/>
          <Route path='/work6/' element={<TWork6 />}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;


