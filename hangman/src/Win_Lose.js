//to use bootstraps on the page you need this
//import 'bootstrap/dist/css/bootstrap.css';
// need this not more cours it is now in sass

// to use sass for customize the color 
import './main.scss';




//functions
function Win() {

    return(
        <div class="bg-greenish-color pt-5">
            <h1 class=" container w-25 bg-yellowish-color p-4 border rounded-pill ">you win!</h1>
            <h4 class='p-2 pb-3'>Choose your next Step!</h4>
            <button class="btn btn-redish-color">Play Again</button>
            <br/><br/>
            <button class="btn btn-redish-color pl-4 pr-4">Log Out</button> 
            <br/><br/>
        </div>
    )
}

export default Win;



