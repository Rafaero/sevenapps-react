import './App.css';
import Read from './components/read';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/' component={Read} />
        </div>
    </Router>
  );
}

export default App;