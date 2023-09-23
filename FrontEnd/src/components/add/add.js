import './add.css';
import { useNavigate } from "react-router-dom";

const Add = () => {
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
    };

    return (
        <div className='add-wrapper'>
            <div className='title'>
                <i className="fa-solid fa-x" onClick={redirectToHome} />
                &nbsp;&nbsp;&nbsp;Add new app
            </div>
            <form method='POST' action='http://localhost:3001/iwr/add'>
                <label htmlFor="website">Website</label>
                <input id="website" type="text" placeholder='website'></input>
                <label htmlFor="username">Email/Username</label>
                <input name='userName' id="username" type="text" placeholder='username'></input>
                <label htmlFor="password">Password</label>
                <input name='password' id="password" type="text" placeholder='password'></input>
                <input type="submit" value="Save" />
            </form>
        </div>
    );
}

export default Add;
