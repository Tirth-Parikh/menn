"use client"
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import '../styles/FeddBack.css';
import '../styles/herosection.css';
import '../styles/productdetal.css';
import '../styles/SecondSect.css';

import tshirt from '../image/image 7.png';
import { SecondSect } from './SecondSect';
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
export const Detailpage = () => {

    const value = 3.7;

    return (
        <>
            <div className="contenr">

                <div className='mainDetailImgContn'>
                    <div className='left'>
                        <div className='lftLft'>
                            <div className='lftLftimg1'>
                                <Image src={tshirt} width={185} height={184} className='leftImgBorder' />
                            </div>
                            <div className='lftLftimg1'>
                                <Image src={tshirt} width={185} height={184} className='leftImgBorder' />
                            </div>
                            <div className='lftLftimg1'>
                                <Image src={tshirt} width={185} height={184} className='leftImgBorder' />
                            </div>

                        </div>
                        <div className='lftRGHT'>
                            <Image src={tshirt} width={472} height={580} className='leftMNImgBorder' />
                        </div>
                    </div>
                    <div className='right'>
                        <div className='rghtOne'>
                            <div className='rghtOneTlt'>
                                <h1>ONE LIFE GRAPHIC T-SHIRTS</h1>
                            </div>
                            <div className='rghtSecRat'>
                                <Box
                                    sx={{
                                        width: 200,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Rating
                                        name="text-feedback"
                                        value={value}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0, fontSize: 25 }}
                                        // fontSize='large'
                                        />}
                                    />
                                    {/* <Box sx={{ ml: 2 }} >
                            {/* {labels[value]} */}
                                    {/* </Box> */}
                                </Box>
                            </div>
                            <div className='rghtThrPrc'>
                                <p>$260</p>
                            </div>
                            <div className='rghtFortDecrt'>
                                <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                            </div>
                        </div>
                        {/* <hr className='hr' /> */}
                        <div className='rghtSec'>
                            <div className='rghtSecFrt'><p>Select Color</p></div>
                            <div className='rghtSecSec'>
                                <span>red</span>
                                <span>red</span>
                                <span>red</span>

                            </div>
                        </div>
                        {/* <hr className='hr' /> */}
                        <div>

                        </div>
                        <div className='rghtThr'>
                            <div className='rghtThrSelctSze'>
                                <p>Choose Size</p>
                            </div>
                            <div className='rghtThrSelcSzeBtn'>
                                <button>Small</button>
                                <button>Small XL</button> <button>XXL</button> <button>XXXL</button> <button>XV</button> <button>Medium</button> <button>Large</button>
                            </div>
                        </div>
                        {/* <hr className='hr' /> */}
                        <div className='rghtFort'>
                            <div className='rghtFortAddBtn'>
                                <div className='rghtFortAddCArtBtn'>
                                    <button>-</button>
                                    <span className='count'>0</span>
                                    <button>+</button>

                                </div>
                            </div>


                            <div className='rghtFortBuyBtn'>
                                <button>Add Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* <hr className='hr' /> */}

                </div>

                <div className='SecondSecFeedBack'>
                    <div className='FeedBackCont'>
                        {/* <div><h2>{title}</h2></div> */}

                        <div className='FeddbackCardCont'>
                            <div className="feedBackCard">
                                <div className="feedBackRatng">
                                    <Box
                                        sx={{
                                            width: 200,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="text-feedback"
                                            value={4.5}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: 25 }}
                                            // fontSize='large'
                                            />}
                                        />
                                        {/* <Box sx={{ ml: 2 }} >
                            {/* {labels[value]} */}
                                        {/* </Box> */}
                                    </Box>
                                </div>
                                <div className="feedBackName">
                                    Tirth P.
                                </div>
                                <div className="feedBackDescr"><p>Sarah M.
                                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p></div>
                            </div>
                            <div className="feedBackCard">
                                <div className="feedBackRatng">
                                    <Box
                                        sx={{
                                            width: 200,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="text-feedback"
                                            value={value}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: 25 }}
                                                fontSize='large'
                                            />}
                                        />
                                        {/* <Box sx={{ ml: 2 }} >
                            {/* {labels[value]} */}
                                        {/* </Box> */}
                                    </Box>
                                </div>
                                <div className="feedBackName">
                                    Tirth P.
                                </div>
                                <div className="feedBackDescr"><p>Sarah M.
                                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p></div>
                            </div>
                            <div className="feedBackCard">
                                <div className="feedBackRatng">
                                    <Box
                                        sx={{
                                            width: 200,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="text-feedback"
                                            value={value}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: 25 }}
                                                fontSize='large'
                                            />}
                                        />
                                        {/* <Box sx={{ ml: 2 }} >
                            {/* {labels[value]} */}
                                        {/* </Box> */}
                                    </Box>
                                </div>
                                <div className="feedBackName">
                                    Tirth P.
                                </div>
                                <div className="feedBackDescr"><p>Sarah M.
                                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='seconCpmpont'>                <SecondSect title='YOU MIGHT ALSO LIKE' />

                </div>

            </div>

            {/* <div className='contenr'>
            <SecondSect title='YOU MIGHT ALSO' />
                </div> */}

        </>)
}
