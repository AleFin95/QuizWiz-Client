import React,{useState, useContext,createContext} from "react";


const AuthContext = createContext();


export const AuthProvider =({children}) => {
    const [user, setUser] = useState(null);

    const logIn = (token) => {
        setUser({ token });
      };
    

    const logOut = () => {
        localStorage.removeItem('token');
        setUser(null);
      };


    return (
        <AuthContext.Provider value= {{user, setUser, logIn, logOut}}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);