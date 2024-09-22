"use client"

import '../styles/herosection.css';
import FeddBack from './FeddBack';
import { SecondSect } from './SecondSect';
export const Herosection = () => {
    // const [dataa,setData]=useState('')
    // const data=async()=>{
    //     try {
    //         const data=await axios.get('http://localhost:8080/gettry')
    //         console.log(data.data.msg,'data');
    //         setData(data.data.msg)
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }
    // data()
    // useEffect(()=>{data(),[]})
    return (
        <>
            <div className="contenr">

                <div className="mainCompmnt">
                    <div className="lftHndCompont">
                        <div>
                            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE </h1>

                        </div>
                        <div>
                            <h2>
                                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                            </h2>
                        </div>
                        <div>
                            <button variant="contained" className='shopBtn'>Shop Now</button>
                        </div>
                        <div className='totalCont'>
                            <div className='totalNumber'>
                                {/* <div className='manContTotlNum'> */}
                                <span className='num'>
                                    <p>200+</p>
                                </span>
                                <span>
                                    <p className='totalNumtext'>International Brands</p>
                                </span>
                                {/* </div> */}

                            </div>

                            <div className='totalNumber'>
                                {/* <div className='manContTotlNum'> */}
                                <span className='num'>
                                    <p>300+</p>
                                </span>
                                <span>
                                    <p className='totalNumtext'>High-Qulity Products</p>
                                </span>
                                {/* </div> */}

                            </div>
                            <div className='totalNumber'>
                                {/* <div className='manContTotlNum'> */}
                                <span className='num'>
                                    <p>30,000+</p>
                                </span>
                                <span>
                                    <p className='totalNumtext'>Happy Customers</p>
                                </span>
                                {/* </div> */}

                            </div>
                        </div>


                
                    </div>
                    <div className="rghttHndCompont">

                    </div>
                </div>

                {/* //SecondSect */}
                <SecondSect title='NEW ARRIVALS' />
                <hr className='hr' />
                <SecondSect title='TOP SELLING' />
                {/* <hr style={{marginTop:'-7rem',marginBottom:'0rem'}}/> */}

                <FeddBack  title='OUR HAPPY CUSTOMERS'/>
            </div>
        </>)
}
