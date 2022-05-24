import React, {useState, useContext} from 'react'
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert";
import {searchUsers} from "../../context/github/GithubActions";

const UserSearch = () => {
    const {searchUsers} = useContext(GithubContext);
    const {setAlert} = useContext(AlertContext);


    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please type in an input', 'error');
        } else {
            searchUsers(text)

            setText('')
        }
    }

    const handleClear = () => {
        setText('')
    }


    return (

        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <Alert/>
            <div>
                <form action="">
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" className="w-full pr-40 bg-gray-100 input input-lg text-black"
                                   placeholder='Search' value={text} onChange={handleChange}/>
                            <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                                    type='Submit' onClick={handleSubmit}>
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                {text.length ?
                    <button className="" onClick={handleClear}>
                        Clear
                    </button> :
                    ''
                }
            </div>
        </div>
    )
}

export default UserSearch