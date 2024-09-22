"use client"
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import '../styles/FeddBack.css';
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
const FeddBack = ({title}) => {


    const value = 5;

    return (
        <>
            <div className='FeedBackCont'>
                <div><h2>{title}</h2></div>

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
                            I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p></div>
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
                                    emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: 80 }}
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
                                    emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: 80 }}
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

        </>)
}

export default FeddBack