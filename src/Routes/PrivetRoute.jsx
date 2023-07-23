
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loading from '../Pages/share/Loader/Loading';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>;
    }
    else if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;