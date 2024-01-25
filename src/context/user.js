import React, { useState } from 'react';

const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
    // the value prop of the provider will be our context data
    const [user, setUser] = useState(null);
    // const currentUser = {
    //     name: "Duane",
    //     interests: ["Coding", "Biking", "Words ending with 'ing"]
    // }; 
    // this value will be available to child components of this provider
    // ln 15 & 16 before using State And Context to keep track of user
    // return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children } 
        </UserContext.Provider>
    );
  }
  
  export { UserContext, UserProvider };
