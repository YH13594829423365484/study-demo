import React from 'react'

import LoginStore from "./login.Store";

class RouteStore{
    constructor(){
        this.loginStore=new LoginStore()
    }
}

const Context=React.createContext(new RouteStore())

export const useStore=()=>{
    return React.useContext(Context)
}

