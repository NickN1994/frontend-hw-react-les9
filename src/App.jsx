import './App.css';
import soldTV from "./helpers/soldTv.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import inStockTv from "./helpers/inStockTv.js";
import salesToMake from "./helpers/salesToMake.js";
import bestSoldTv from "./helpers/bestSoldTv.js";
import priceBestSellingTv from "./helpers/priceBestSellingTv.js";
import priceTv from "./helpers/priceBestSellingTv.js";
import screenSize from "./helpers/screenSize.js";
import minus from './assets/minus.png'
import check from './assets/check.png'
import allTv from "./helpers/allTv.jsx";
import allTvs from "./helpers/allTv.jsx";


function App() {
    return (
        <main>
            <div className='outer-container'>
                <div className='inner-container'>
                    <h1>Tech it easy dashbord</h1>
                    <section className='saleInfo'>
                        <h2>Verkoopoverzicht</h2>
                        <div className='overzicht'>

                            <div className='soldTV'>
                                <h3>Aantal verkochte producten</h3>
                                <p className='number'>{soldTV(inventory)}</p>
                            </div>

                            <div className='inStock'>
                                <h3>Aantal ingekochte producten</h3>
                                <p className='number'>{inStockTv(inventory)}</p>
                            </div>

                            <div className='salesToMake'>
                                <h3>Aantal te verkopen producten</h3>
                                <p className='number'>{salesToMake(inventory)}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className='outer-container'>

                <div className='inner-container'>
                    <h2>Best verkochte TV</h2>
                    <div className='bestSoldTVbox'>
                        <div className='bestSoldTvImgBox'>
                            <img src={bestSellingTv.sourceImg} alt="Afbeelding Best Sold Tv" className='bestSoldTVImg'/>
                        </div>

                        <section className='bestSoldTV'>
                            <p>{bestSoldTv(inventory)}</p>
                            <p>{priceTv(inventory)}</p>
                            <p>{screenSize(bestSellingTv.availableSizes)}</p>
                            <ul className='options'>
                                <li><img src={check} alt="icon" className='checkicon'/> wifi</li>
                                <li><img src={minus} alt="icon" className='checkicon'/> speech</li>
                                <li><img src={check} alt="icon" className='checkicon'/> hdr</li>
                                <li><img src={check} alt="icon" className='checkicon'/> bluetooth</li>
                                <li><img src={minus} alt="icon" className='checkicon'/> ambilight</li>
                            </ul>
                        </section>
                    </div>

                </div>
            </div>

            <div className='outer-container'>
                <div className='inner-container'>
                    <h2>Alle tv's</h2>
                    <div className='buttons'>
                        <button type='button'>Meest verkocht</button>
                        <button type='button' className='buttonTwo'>Goedkoopste eerst</button>
                        <button type='button'>Meest geschikt voor sport eerst</button>
                    </div>

                    {allTv(inventory)}


                    {/*    hieronder inner-container close*/}
                </div>
                {/*    hieronder de outercontainer close*/}
            </div>


        </main>
    )
}

export default App
