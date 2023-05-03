import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center items-center h-[80vh] '>
            <progress className="progress w-56 progress-info"></progress>
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;