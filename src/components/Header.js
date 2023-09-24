import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <>
            <div className="header-left">
                <a href="./">
                    <img src="https://imgs.search.brave.com/dbfUbzep11fUE-F45pfy8yN1blyodeVjwsfsZL2JmpY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHJp/dmVteXdheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDQvRmFzdC1Gb29k/LVJlc3RhdXJhbnQt/TmFtZXMuanBn" alt="img"></img>
                </a>
                <h1>Food Villa</h1> 
            </div>
        </>
    )
};
const Header = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false) 
    return (
        <div className="header-container">
            <Title />
            <div className="header-right">
                <ul >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            <div>
                {
                    isLoggedIn ? <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>LogOut</button> : <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>LogIn</button>
                }
            </div>
        </div>
    )
}
export default Header