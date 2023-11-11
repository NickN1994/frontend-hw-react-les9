import './App.css';
import soldTV from "./helpers/soldTv.js";
import {inventory} from "./constants/inventory.js";
import inStockTv from "./helpers/inStockTv.js";
import salesToMake from "./helpers/salesToMake.js";

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
                    <section className='bestSoldTV'>
                        {/*<img src="" alt=""/>*/}
                        {/*<p>dit is even een voorbeeld</p>*/}

                    </section>

                </div>
            </div>


        </main>
    )
}

export default App
