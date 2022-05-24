import React from 'react'
import {Link} from 'react-router-dom'

const UserItem = ({user: {avatar_url, login}}) => {
    return (
        <div className='card shadow-md compact side bg-base-100'>
            <div className="flex-row items-center space-x-4 card-body">
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="profile"/>
                    </div>
                </div>
                <div className="card-title">{login}</div>
                <Link className='text-base-content text-opacity-40'
                      to={`/user/${login}`}>Visit Profile
                </Link>
            </div>
        </div>
    )
}

export default UserItem