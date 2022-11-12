import { Routes, Route, Link } from 'react-router-dom';
import { Login } from './views/Login';
import { Home } from './views/Home';
import { NotFound } from './views/NotFound';
import { Layout } from './components/Layout';
import { Profile } from './views/Profile';

function App() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
