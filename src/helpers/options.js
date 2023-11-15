import check from "../assets/check.png";
import minus from "../assets/minus.png";

function tvOptions (options) {
    if (options === true) {
        return <img src={check} alt="icon" className='checkicon'/>
    } else {
        return <img src={minus} alt="icon" className='checkicon'/>
    }

}

export default tvOptions;