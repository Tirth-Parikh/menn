"use client"
import { Card } from '../componentes/Card'
import '../styles/SecondSect.css'
export const SecondSect = ({ title }) => {
    return (
        <>
            <div className="mainContenSecnsec">
                <div className="secSectonTitle">
                    <h2>{title}</h2>
                </div>

                <div className='cards'>
                    <Card />

                </div>
                <div className='seconSecBtn'>
                    <button>
                        View All
                    </button>
                </div>
            </div>
        </>)
}


{/* <div className='dataDply'>
                    <div>
                        <div className='cardContnt'>
                            <Image src={tshirt} width={296} height={298} className='image' />
                        </div>
                        <div className='cardDetal'>
                            <div className='cardTitle'><p>T-SHIRT WITH TAPE DETAILS</p></div>
                            <div className='cardRateng'><p>4.5</p></div>
                            <div className='cardPric'><p>$334</p></div>

                        </div>
                    </div>
                    <div>
                        <div className='cardContnt'>
                            <Image src={tshirt} width={296} height={298} className='image' />
                        </div>
                        <div className='cardDetal'>
                            <div className='cardTitle'><p>T-SHIRT WITH TAPE DETAILS</p></div>
                            <div className='cardRateng'><p>4.5</p></div>
                            <div className='cardPric'><p>$334</p></div>

                        </div>
                    </div>  <div>
                        <div className='cardContnt'>
                            <Image src={tshirt} width={296} height={298} className='image' />
                        </div>
                        <div className='cardDetal'>
                            <div className='cardTitle'><p>T-SHIRT WITH TAPE DETAILS</p></div>
                            <div className='cardRateng'><p>4.5</p></div>
                            <div className='cardPric'><p>$334</p></div>

                        </div>
                    </div>
                    <div>
                        <div className='cardContnt'>
                            <Image src={tshirt} width={296} height={298} className='image' />
                        </div>
                        <div className='cardDetal'>
                            <div className='cardTitle'><p>T-SHIRT WITH TAPE DETAILS</p></div>
                            <div className='cardRateng'><p>4.5</p></div>
                            <div className='cardPric'><p>$334</p></div>

                        </div>
                    </div>


                </div> */}