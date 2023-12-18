import React,{useState, useContext,createContext} from "react";


const AuthContext = createContext();


export const AuthProvider =({children}) => {
    const [user, setUser] = useState();

    const logOut = () => {
        setUser(null);
      };


    return (
        <AuthContext.Provider value= {{user, setUser, logOut}}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);