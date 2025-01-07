import { Link, useLocation } from 'react-router-dom';

export const Navs = () => {
    const location = useLocation();

    const getNavClass = (path) => {
        return location.pathname === path
            ? 'nav-item text-[#BC7A22]'
            : 'nav-item';
    };

    return (
        <>
            <Link to="/" className={getNavClass('/')}>Products</Link>
            <Link to="/project" className={getNavClass('/project')}>Project</Link>
            <Link to="/features" className={getNavClass('/features')}>Features</Link>
            <Link to="/students" className={getNavClass('/students')}>Students</Link>
            <Link to="/fans" className={getNavClass('/fans')}>Fans</Link>
            <Link to="/play" className={getNavClass('/play')}>Play</Link>
            <Link to="/token" className={getNavClass('/token')}>Buy-Hasanat</Link>
        </>
    );
};
