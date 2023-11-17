import {bestSellingTv, inventory} from "../constants/inventory.js";
import screenSizeAllTv from "./screenSizeAllTv.js";
import tvOptions from "./options.jsx";



function allTv () {

    let allTvs = inventory.map((tv) => {

        return <div className='tvbox'>
            <div className='tvboximg'>
                <img src={tv.sourceImg} alt="Afbeelding Tv" className='tvIMG'/>
            </div>

            <section className='tvInfo'>
                <h3>{tv.brand} {tv.type} {tv.name}</h3>
                <p className='price'>€{tv.price},-</p>
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