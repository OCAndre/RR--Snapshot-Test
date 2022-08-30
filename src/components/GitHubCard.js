import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"


function GitHubCard() {
    const [gitHubName, setGitHubName] = useState('')
    const [gitHubURL, setGitHubURL] = useState('')
    const [gitHubImageURL, setGitHubImageURL] = useState('')


    useEffect(() => {
        fetch('https://api.github.com/users/OCAndre')
            .then(res => res.json())
            .then(data => {
                setGitHubName(data.login)
                setGitHubURL(data.html_url)
                setGitHubImageURL(data.avatar_url)
            })
    }, [])

    return (
        <div className="card">
            <div>
                <h1>Github Profile Info:</h1>
                <h2>{gitHubName}</h2>
                <a href={gitHubURL}><button>Link to GitHub profile</button></a>
                <p>
                    I am a coder and I code things.
                </p>
            </div>
            <div className="pt-5">
                <img src={gitHubImageURL} alt='Github profile image' width='200' height='200' />
            </div>
        </div>
    )
}

export default GitHubCard