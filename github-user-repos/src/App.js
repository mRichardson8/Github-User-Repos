import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import env from "react-dotenv";
function App() {
  const [username, setUsername] = useState('')
  const [timer, setTimer] = useState()
  const [gitData, setGitData] = useState()
  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
          const { data } = await axios.get(`https://api.github.com/users/${username}/repos`, {headers: {"Authorization" : window.env.API_KEY}})
          setGitData(data)
        }catch(err){
          console.log("big error", err.message)
        }
      }

  return (
    <div className="App">
      <div className="Header">
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={handleChange} placeholder='Enter your username'/>
          </form>
      </div>
      <div className="data-cont">
        {gitData ? <>
          <section>You have {gitData.length} Repos</section>
          {gitData.map(repo => {
            //Add Repo component for each repo that displays the relevant data
          })}
        </> : <section>Error, you are not a user</section>}
      </div>
    </div>
  );
}

export default App;
