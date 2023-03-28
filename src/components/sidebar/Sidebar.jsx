import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWRZs2yIy1by5YstHJPjC4pNuQNa2R2GoWw&usqp=CAU" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eum sed ullam sunt dignissimos tenetur reiciendis quidem alias id. Eum.</p>
        
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
        </div>
    </div>
  )
}
