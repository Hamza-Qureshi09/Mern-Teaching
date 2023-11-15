import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = (props) => {
    const { auth } = props
    return (
        <div>
            {/* ternary operators */}
            {
                auth.isverified === true && auth.accessToken != null ?
                    <Outlet />
                    : <Navigate to="/login" replace={true} />
            }
        </div>
    )
}

export default ProtectedRoutes
