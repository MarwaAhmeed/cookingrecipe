import "./Header.css"
import imagee from "../assets/imgonline-com-ua-resize-j4Oqdc0PSUy.jpg"
export default function Header(){
    return(
        <header className="text-center position-relative">
            <img  src={imagee} alt="" style={{width:"100%"}}/>
            <div className="header-content text-white py-lg-4 px-lg-3 p-2">
               <h2 className="text-white text-center fw-light fst-italic">- Recipes -</h2>
            </div>
        </header>
    )
}