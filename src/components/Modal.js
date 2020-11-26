import React from 'react'
import {ContextProvider} from '../global/Context'

const Modal = () => {
    const {modal, closeModal, register, login} = React.useContext(ContextProvider)
    const [state, setState] = React.useState({
        register: true,
        login: false,
    });
    const [inputs, setInputs] = React.useState({
        username: "",
        email: "",
        password: ""
    })
    const handleInput = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    const formsToggle = () => {
        setState({
            ...state,
            register: !state.register,
            login: !state.login,
        });
    };
    const closeForm = (e) => {
        const className = e.target.getAttribute("class");
        if(className === "Modal"){
            closeModal()
        }
    }
    const registerUser = (e) => {
        e.preventDefault()
        register(inputs)
        setInputs({username: "", email: "", password: ""})
    }
    const userLogin = (e) => {
        e.preventDefault()
        login(inputs)
    }
    return(
        <>
        {modal ? (
            <div className="Modal" onClick={closeForm}>
                <div className="Modal_container">
                    {state.register ? (
                    <div className="Modal_form">
                        <form onSubmit={registerUser}>
                            <div className="Modal_group">
                                <img src="/images/instagram-handswriting.png" alt="" />
                            </div>
                            <div className="Modal_group">
                                <input type="text" name="username" placeholder="Username" className="Modal_input" onChange={handleInput} value={inputs.username} required></input>
                            </div>
                            <div className="Modal_group">
                                <input type="email" name="email" placeholder="Email" className="Modal_input" onChange={handleInput} value={inputs.email} required></input>
                            </div>
                            <div className="Modal_group">
                                <input type="password" name="password" placeholder="Create Password" className="Modal_input" onChange={handleInput} value={inputs.password} required></input>
                            </div>
                            <div className="Modal_group">
                                <input type="submit" value="Register" className="btn btn-smart"/>
                            </div>
                            <div className="Modal_group">
                                <span onClick={formsToggle}>Already have an account ?</span>
                            </div>
                        </form>
                    </div> ) : ( 
                    <div className="Modal_form">
                        <form onSubmit={userLogin}>
                            <div className="Modal_group">
                                <img src="/images/instagram-handswriting.png" alt="" />
                            </div>
                            <div className="Modal_group">
                                <input type="email" name="email" placeholder="Email" className="Modal_input" onChange={handleInput} value={inputs.email} required></input>
                            </div>
                            <div className="Modal_group">
                                <input type="password" name="password" placeholder="Create Password" className="Modal_input" onChange={handleInput} value={inputs.password} required></input>
                            </div>
                            <div className="Modal_group">
                                <input type="submit" value="Login" className="btn btn-smart"/>
                            </div>
                            <div className="Modal_group">
                                <span onClick={formsToggle}>Create a new account ?</span>
                            </div>
                        </form>
                    </div>)}
                   
                </div>
            </div>
        ):(
            ""
        )}
        </>
    )
}

export default Modal