import React from "react"

const Stories = () => {
    const [state, setState] = React.useState([
        {id:1, image: 'https://loremflickr.com/320/320?random=1', name: 'name121'},
        {id:2, image: 'https://loremflickr.com/320/320?random=2', name: 'name122'},
        {id:3, image: 'https://loremflickr.com/320/320?random=3', name: 'name123'},
        {id:4, image: 'https://loremflickr.com/320/320?random=4', name: 'name124'},
        {id:5, image: 'https://loremflickr.com/320/320?random=5', name: 'name125'},
        {id:6, image: 'https://loremflickr.com/320/320?random=6', name: 'name126'},
        {id:7, image: 'https://loremflickr.com/320/320?random=7', name: 'name127'},
        {id:8, image: 'https://loremflickr.com/320/320?random=8', name: 'name128'},
        {id:9, image: 'https://loremflickr.com/320/320?random=9', name: 'name129'},
    ])
    return(
        <div className="Stories">
            {state.map(user => (
            <div key={user.id} className="Stories_info">
                <div className="Stories_img">
                    <span>
                        <img src={user.image} alt={user.name} />
                    </span>
                </div>
                <div className="Stories_name">
                    {user.name}
                </div>
            </div>
            ))}
        </div>
    )
}

export default Stories