import "./topbar.css"
import {Link} from 'react-router-dom'

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className="link" to="/" >HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/" >ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/" >CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
                <li className="topListItem">{user&&"LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
          {
            user?(
              <Link className="link" to="/settings"><img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZLCYtxJUOla2B0KQEDDKEmks1jtP85kLpw&usqp=CAU" alt="Ronni's profile pic"/></Link>
            
            ):(<ul className="topList">
              <li className="topListItem"><Link className="link" to="/login" >LOGIN</Link></li>
              <li className="topListItem"><Link className="link" to="/register" >REGISTER</Link></li>
              </ul>)}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> 
        </div>
    </div>
  )
}
