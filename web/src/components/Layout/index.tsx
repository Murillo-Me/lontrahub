import { Link, Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div className="w-full h-screen">
            <div className="w-full flex justify-end items-center pr-10">
                <Link className="nav-item" to="/">
                    Home
                </Link>
                <Link className="nav-item" to="/profile">
                    Profile
                </Link>
                <Link className="nav-item" to="/logout">
                    Logout
                </Link>
            </div>
            <Outlet />
        </div>
    );
}
