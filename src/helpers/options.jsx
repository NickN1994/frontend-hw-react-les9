import check from "../assets/check.png";
import minus from "../assets/minus.png";

function tvOptions (options) {
    options.map((option) => {
        if (option.applicable === true) {
            return <li><img src={check} alt="icon" className='checkicon'/>{option.name}
            </li>
        } else {
            return <li><img src={minus} alt="icon" className='checkicon'/>{option.name}
            </li>
        }
    })
    // return tvOptions;


}

export default tvOptions;