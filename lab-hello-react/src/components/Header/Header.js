import NavBar from "../NavBar/NavBar";
import "./Header.css";

function Header(){
    return(
        <div className='Header'>
            <NavBar />
            <div className='HeaderContent'>
                <h1>Say hello to ReactJS</h1>
                <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer</h3>
                <button>Awesome!</button>
            </div>
        </div>
    );
}

export default Header; 