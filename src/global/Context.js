import React, {createContext} from 'react'
import {auth} from '../configs/Config'

export const ContextProvider = createContext();

const Context = (props) => {
    const [modal, setModal] = React.useState(false)
    const [user, setUser] = React.useState(null)
    const [loader, setLoader] = React.useState(true)
    const openModal = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false)
    }
    const register = async (user) => {
        const {username,email,password} = user
        try{
            const res = await auth.createUserWithEmailAndPassword(email,password)
            res.user.updateProfile({displayName: username})
            setModal(false)
        } catch(error){
            console.log(error)
        }
    }
    const login = async (user) => {
        const {email, password} = user
        const res = await auth.signInWithEmailAndPassword(email,password)
        setModal(false)
    }
    const logout = () => {
        auth
        .signOut()
        .then(() =>{
           setUser(null)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    React.useEffect(()=>{
        auth.onAuthStateChanged(user => {
            setUser(user)
            setLoader(false)
        })
    }, [])
    console.log("login user ", user)
    return <ContextProvider.Provider value={{modal, openModal, closeModal, register, login, logout, user, loader}}>{props.children}</ContextProvider.Provider>
}

export default Context;