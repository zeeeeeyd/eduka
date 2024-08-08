import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/website/MainLayout';
import SignIn from './pages/website/SignIn';
import SignUp from './pages/website/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
