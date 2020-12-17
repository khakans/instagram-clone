import React, {useContext} from 'react'
import {ContextProvider} from '../global/Context'

const Timeline = () => {
    const {timeline} = useContext(ContextProvider)
    return (
        <>
        {timeline.map((timelines) => 
        <div className="timeline" key={timelines.id}>
            <div className="timeline_header">
                <div className="timeline_header-photo">{timelines.username[0]}</div>
                <div className="timeline_header-name">{timelines.username}</div>
            </div>
            <div className="timeline_image">
                <img src={timelines.image} alt={timelines.image} />
            </div>            
        </div>
        )}
        </>
    )
}

export default Timeline