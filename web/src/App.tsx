import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

import { PrivateRoute } from './components/PrivateRoute';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { NotFound } from './views/NotFound';
import { Profile } from './views/Profile';

function App() {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
