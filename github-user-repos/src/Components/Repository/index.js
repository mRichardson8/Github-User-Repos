import React, { useRef, useState } from 'react';
//TODO add onclick to expand each repo
//EXTEND to have it as css transition

const Repository = ({repoData}) => {

    const [clicked, setClicked] = useState(false)

    const container = useRef(null)


    // const calcFields = () => {
    //     let number = 0
    //     if (repoData.description){
    //         number++;
    //     }
    //     return number
    // }

    const handleClick = (e) => {
        if (e.target.className === 'repo-link'){
            return;
        }
        container.current.style.maxHeight = clicked ? "50px" : '500px';
        setClicked(prevClick => !prevClick)
    }

    

    return (
        <div className='repo-container' ref={container} onClick={handleClick}>
            <p><a className='repo-link' href={repoData.html_url}>{repoData.name}</a></p>
            <p>{repoData.description}</p>
            <p>Created at: {repoData.created_at}</p>
            <p>Last Updated: {repoData.updated_at}</p>

            
            
        </div>
    );
}

export default Repository;
