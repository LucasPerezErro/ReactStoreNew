import { createContext } from "react";

export const userContext = createContext({ user: "anonymous" });

export function UserContextProvider(props) {
    return (
        <userContext.Provider value={{ user: "Juan" }}>
            {props.children}
        </userContext.Provider>
    );
}
