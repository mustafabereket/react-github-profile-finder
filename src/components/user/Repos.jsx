import React, { useContext, Fragment } from 'react';
import GithubContext from '../../context/github/githubContext'
const Repos = () => {
    const githubContext = useContext(GithubContext);

    return (
        <Fragment>
        {githubContext.repos.map((repo,index) => {
            return (
                <div className='card' key={index}>
                    <h3>
                        <a href={repo.html_url}>{repo.name}</a>
                    </h3>
                </div>
            )
        })}
        </Fragment>
    )
}

export default Repos;