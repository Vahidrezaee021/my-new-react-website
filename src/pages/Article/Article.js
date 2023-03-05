import { Link, Outlet } from "react-router-dom"
import MyNavbar from "../../components/Navbar/Navbar"
import './Article.css'

function Article(){
    return(
        <div className="articleWrapper">
            <MyNavbar />
            <h1>صفحه مقالات</h1>
            <hr />
            <div className="btnContainer">
                <Link to='php' className="linkBtn">php article</Link>
                <Link to='js' className="linkBtn">js article</Link>
                <Link to='react' className="linkBtn">react article</Link>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default Article