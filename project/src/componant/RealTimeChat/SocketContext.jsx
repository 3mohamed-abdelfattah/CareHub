import { createContext, useState, useEffect, useContext } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const newSocket = io("http://localhost:3000/realtimechat");
        setSocket(newSocket);
        return () => newSocket.close();
    }, []);
    return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};
