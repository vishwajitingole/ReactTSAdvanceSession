import { create } from "zustand";

const useAuth = create( (set) => ({

    isLoggedIn : false,

    setIsLoggedIn : (value) => set ({isLoggedIn : value})

}) )

export default useAuth;