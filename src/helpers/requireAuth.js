import { Navigate } from "react-router-dom";
import { useState } from "react";

const RequireAuth = ({children}) => {
    
    const [user, setStateUser] = useState(null);
    
    if (user === null) {
        return <Navigate to="/auth" />
    }
    return children;
}
export {RequireAuth};