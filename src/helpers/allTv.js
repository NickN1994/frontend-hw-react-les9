import {bestSellingTv, inventory} from "../constants/inventory.js";
import bestSoldTv from "./bestSoldTv.js";
import priceTv from "./priceBestSellingTv.js";
import screenSize from "./screenSize.js";
import check from "../assets/check.png";
import minus from "../assets/minus.png";
import screenSizeAllTv from "./screenSizeAllTv.js";
import tvOptions from "./options.js";



function allTv () {
    let allTvs = inventory.map((tv) => {
        return <div className='bestSoldTVbox'>
            <div className='bestSoldTvImgBox'>
                <img src={tv.sourceImg} alt="Afbeelding Tv" className='bestSoldTVImg'/>
            </div>

            <section className='bestSoldTV'>
                <p>{tv.brand} {tv.type} {tv.name}</p>
                <p>€{tv.price},-</p>
                <p>{screenSizeAllTv(tv.availableSizes)}</p>
                <ul className='options'>
                    <li>{tvOptions(tv.options)} wifi</li>
                    <li>{tvOptions(tv.options)} speech</li>
                    <li>{tvOptions(tv.options)} hdr</li>
                    <li>{tvOptions(tv.options)} bluetooth</li>
                    <li>{tvOptions(tv.options)} ambilight</li>
                </ul>
            </section>
        </div>

    })
    return allTvs
}

export default allTv;