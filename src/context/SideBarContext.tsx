"use client"
import { createContext, useState, useContext, ReactNode } from 'react'

interface SideBarContextType {
    isSideBarOpen: boolean;
    toggleSideBar: () => void;
}
const SideBarContext = createContext<SideBarContextType | undefined>(undefined);

export const SideBarContextProvider = ({ children }: { children: ReactNode }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const toggleSideBar = () => {
        setIsSideBarOpen((prev) => !prev)
    }
    return (
        <SideBarContext.Provider value={{ isSideBarOpen, toggleSideBar }}>
            {children}
        </SideBarContext.Provider>
    )
}
export const useSideBar=()=>{
    const context=useContext(SideBarContext);
    if(!context){
        throw new Error("useSideBar must be used within a SideBarContextProvider")
    }
    return context
}
