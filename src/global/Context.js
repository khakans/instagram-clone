import React, {createContext} from 'react'
import {auth, db, storage} from '../configs/Config'
import firebase from "firebase"

export const ContextProvider = createContext();

const Context = (props) => {
    const [modal, setModal] = React.useState(false)
    const [user, setUser] = React.useState(null)
    const [loader, setLoader] = React.useState(true)
    const [timeline, setTimeline] = React.useState([])
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
    const posting = (data) => {
        const {title,image} = data;
        const upload = storage.ref('images/'+image.name).put(image);
        upload.on("state_changed", (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, (err) => {
            console.log(err);
        }, () => {
            storage.ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
                db.collection("posting").add({
                    title,
                    image: url,
                    username: user.displayName,
                    currentTime: firebase.firestore.FieldValue.serverTimestamp()
                })
            });
        })
    }

    React.useEffect(()=>{
        auth.onAuthStateChanged(user => {
            setUser(user)
            setLoader(false)
        })

        //fetch timeline
        db.collection("posting")
        .orderBy("currentTime")
        .onSnapshot((snapshot) => {
            setTimeline(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().image,
                    username: doc.data().username
                }))
            )
        })
    }, [])
    console.log("login user ", user)
    return <ContextProvider.Provider value={{modal, openModal, closeModal, register, login, logout, posting, timeline, user, loader}}>{props.children}</ContextProvider.Provider>
}

export default Context;