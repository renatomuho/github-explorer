import RepoItem from "./RepoItem";
import GithubContext from "../../context/github/GithubContext";
import {useContext} from "react";
import PropTypes from 'prop-types'
import Loader from "../../Pages/Loader";

const RepoList = ({repos}) => {
    const {loading} = useContext(GithubContext);

    if (loading) {
        return (
            <Loader/>
        )
    } else {
        return (
            <>
                <div className='rounded-lg shadow-lg card bg-base-100'>
                    <div className='card-body'>
                        <h2 className="text-3xl my-4 font-bold card-title">
                            Latest Repositories
                        </h2>
                        {repos.map((repo) => (
                            <RepoItem key={repo.id} repo={repo}/>
                            // <h3>{repo.name}</h3>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

RepoList.prototype = {
    repos: PropTypes.array.isRequired,
}

export default RepoList
