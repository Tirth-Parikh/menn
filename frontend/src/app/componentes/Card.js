"use client"
import Image from 'next/image'
import tshirt from '../image/image 7.png'
import '../styles/SecondSect.css'

export const Card = () => {
  return (
    <>
      
                <div className='dataDply'>
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
                    {/* <div>
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
                    <div>
                        <div className='cardContnt'>
                            <Image src={tshirt} width={296} height={298} className='image' />
                        </div>
                        <div className='cardDetal'>
                            <div className='cardTitle'><p>T-SHIRT WITH TAPE DETAILS</p></div>
                            <div className='cardRateng'><p>4.5</p></div>
                            <div className='cardPric'><p>$334</p></div>

                        </div>
                    </div> */}


                </div>
    </>
  )
}

// export default Card