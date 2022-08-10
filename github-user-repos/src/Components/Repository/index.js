import React, { useRef, useState } from 'react';
//TODO add onclick to expand each repo
//EXTEND to have it as css transition

const Repository = ({repoData}) => {

    const [clicked, setClicked] = useState(false)

    const container = useRef(null)


    const calcFields = () => {
        let number = 0
        if (repoData.description){
            number++;
        }
        return number
    }

    const handleClick = () => {
        container.current.style.maxHeight = clicked ? "50px" : `500px`;
        setClicked(prevClick => !prevClick)
    }

    

    return (
        <div className='repo-container' ref={container} onClick={handleClick}>
            <p>{repoData.name}</p>
            <p>{repoData.description}</p>
            <p>Created at: {repoData.created_at}</p>
            <p>Last Updated: {repoData.updated_at}</p>

            
            
        </div>
    );
}

export default Repository;
