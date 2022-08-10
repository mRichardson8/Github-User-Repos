import './App.css';
import React, { useState, useRef} from 'react'
import axios from 'axios'
import env from "react-dotenv";
import { Repository } from './Components';

function App() {
  const [username, setUsername] = useState('')
  const [gitData, setGitData] = useState()
  const [error, setError] = useState(false)
  const gifDiv = useRef(null)
  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    gifDiv.current.style.display = 'none'
    makeRequest()
  }

  // useEffect(()=>{
  //   const makeRequest = async () => {
  //     try{
  //       console.log(env.API_KEY)
  //       const { data } = await axios.get(`https://api.github.com/users/${username}/repos`, {headers: {"Authorization" : env.API_KEY}})

  //     }catch(err){

  //     }
  //   }
  // }, [username])

  const makeRequest = async () => {
        try{
          setGitData(null)
          const { data } = await axios.get(`https://api.github.com/users/${username}/repos`, {headers: {"Authorization" : env.API_KEY}})
          setGitData(data)
        }catch(err){
          console.log("big error", err.message)
          setError(true)
        }
      }

  return (
    <div className="App">
      <div className="Header">
          <form onSubmit={handleSubmit}>
            <i className="fa fa-github" onClick={() => window.location.reload()}></i>
            <input type="text" value={username} onChange={handleChange} onFocus={() => setError(false)} placeholder='Enter your username'/>
            <input type="submit" value="Search"/>
            <i className="fa-regular fa-cow"></i>
          </form>
      </div>
      <div className="data-cont">
        {gitData ? <>
        <section className="user-details">
          
          <img src={gitData[0].owner.avatar_url} alt="User avatar" className="profile"></img>
          <h1>{gitData[0].owner.login}</h1>
          <p>You have {gitData.length} Repos</p>
        </section>
          <section className="repo-list">
            <ul>
          {gitData.map(repo => <Repository repoData = {repo}/>
          )}
          </ul>
            </section>

        </> : null}
        
        {error ? <p>Error, {username} is not a valid GitHub user</p> : null}
      </div>

      <div id='start-gif' ref={gifDiv}>
        <h1>Welcome to the GitHub Repo-Radar 🛰️</h1>
          <img id='radio-gif' src="radar_principle.gif" alt="radar gif" />
        </div>
    </div>
  );
}

export default App;
