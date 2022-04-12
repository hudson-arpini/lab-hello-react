import ironhacklogo from "../../images/ironhack-logo-xs.png"
import menutop from "../../images/menu-top-xs.png"
import reactlogo from "../../images/reactlogo.png"
import "./styles.modules.css"


function Header() {
    return (
        <div className="header">
            <div className="icons">
                <img src={ironhacklogo} alt="ironhack logo"/>
                <img src={menutop} alt="menu top"/>
            </div>
            <div className="container">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use <br/>the most popular frontend library, and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>
            <img src={reactlogo} alt="reactlogo" className="react1"/>
            <img src={reactlogo} alt="reactlogo" className="react2"/>
            <img src={reactlogo} alt="reactlogo" className="react3"/>
            <img src={reactlogo} alt="reactlogo" className="react4"/>
            <img src={reactlogo} alt="reactlogo" className="react5"/>
            <img src={reactlogo} alt="reactlogo" className="react6"/>
        </div>
    )
}

export default Header