import {bestSellingTv, inventory} from "../constants/inventory.js";
import bestSoldTv from "./bestSoldTv.js";
import priceTv from "./priceBestSellingTv.js";
import screenSize from "./screenSize.js";
import check from "../assets/check.png";
import minus from "../assets/minus.png";
import screenSizeAllTv from "./screenSizeAllTv.js";

inventory

function allTv () {
    let allTvs = inventory.map((tv) => {
        return <div className='bestSoldTVbox'>
            <div className='bestSoldTvImgBox'>
                <img src={tv.sourceImg} alt="Afbeelding Tv" className='bestSoldTVImg'/>
            </div>

            <section className='bestSoldTV'>
                <p>{tv.brand + ' ' + tv.type + ' ' + tv.name}</p>
                <p>{'€' + tv.price + ',-'}</p>
                <p>{screenSizeAllTv(inventory)}</p>
                <ul className='options'>
                    <li><img src={check} alt="icon" className='checkicon'/> wifi</li>
                    <li><img src={minus} alt="icon" className='checkicon'/> speech</li>
                    <li><img src={check} alt="icon" className='checkicon'/> hdr</li>
                    <li><img src={check} alt="icon" className='checkicon'/> bluetooth</li>
                    <li><img src={minus} alt="icon" className='checkicon'/> ambilight</li>
                </ul>
            </section>
        </div>
    })

}