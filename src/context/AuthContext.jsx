// AuthContext.js
import React, { createContext } from 'react';

// AuthContext banate hain, abhi isme koi authentication functionality nahi hai
const AuthContext = createContext();

// AuthProvider component, jo context ko provide karega
export const AuthProvider = ({ children }) => {
    return (
        // Filhaal context me kuch values nahi hain, but future me yaha values add ho sakti hain
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook jisse AuthContext ko access kiya ja sake
export const useAuthContext = () => React.useContext(AuthContext);

