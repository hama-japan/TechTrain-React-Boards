import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Threads from './Threads';
import CreateThread from './CreateThread';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Threads />} />
                <Route path="/create-threads" element={<CreateThread />} />
            </Routes>
        </Router>
    );
};

export default App;