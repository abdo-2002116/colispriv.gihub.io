import { Link } from "react-router-dom";

export default function Button(){


    return(<>
    
    <div class="w-10  mt-20">
    <Link to="/"><img src={require("../image/fleche-gauche.png")} alt="" /></Link> 
    </div>
    </>)
}
