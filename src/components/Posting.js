import React, { useContext, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { ContextProvider } from '../global/Context';

const Posting = () => {
    const {posting} = useContext(ContextProvider);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const handleImage = e => {
        setImage(e.target.files[0]);
    }
    
    const postingPost = (e) => {
        e.preventDefault();
        posting({title,image})
        setTitle('')
        setImage('')
    }

    return (
    <div className="posting">
        <form onSubmit={postingPost}>
            <div className="posting_r1">
                <input
                    type="text"
                    className="posting_input1"
                    placeholder="what is your moments now..."
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required    
                />
            </div>
            <div className="posting_r2">
                <div className="posting_r2-a">
                    <label htmlFor="file"><FaCamera className="camera-icon"/></label>
                    <input
                        type="file"
                        accept="image/*"
                        className="posting_input2"
                        id="file"
                        onChange={handleImage} 
                        required 
                    />
                </div>
                <div className="posting-r2-b">
                    <input type="submit" value="Posting Now" className="btn-posting"/>
                </div>
            </div>
        </form>
    </div>
    )
}

export default Posting;