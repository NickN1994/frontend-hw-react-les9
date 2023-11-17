import {bestSellingTv, inventory} from "../constants/inventory.js";
import screenSizeAllTv from "./screenSizeAllTv.js";
import tvOptions from "./options.jsx";



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
                    {tvOptions(tv.options)}
                </ul>
            </section>
        </div>

    })
    return allTvs
}

export default allTv;