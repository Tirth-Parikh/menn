
"use client"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

export const Filter = () => {
    const [value, setValue] = useState([20, 20]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
<>
<div className='FilterContnr'>
    <div className='boxTlt'>
    <div><h5>Filter</h5></div>
        <div>
            <p>T-shirts</p>
        </div>
        <div>
            <p>Shorts</p>
        </div>
        <div>
            <p>T-shirts</p>
        </div>
        <div>
            <p>T-shirts</p>
        </div>
    </div>
    <div className="boxPrc">
    <div><h5>Price</h5></div>
    <div><Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
      />
    </Box></div>
    </div>

    <div className='boxColor'>
    <div><h5>Colors</h5></div>
    <div className='rghtSecSec'>
                                <span>red</span>
                                <span>red</span>
                                <span>red</span>

                            </div>
    </div>
    <div className='boxSize'>
    <div className='rghtThrSelcSzeBtn'>
                                <button>Small</button>
                                <button>Small XL</button> <button>XXL</button> <button>XXXL</button> <button>XV</button> <button>Medium</button> <button>Large</button> 
                            </div>
    </div>
    <div className='boxDressStyle'>
    <div><h5>Dress Style</h5></div>

    <div>
            <p>Casual</p>
        </div>
    </div>
    <div>
            <p>Formal</p>
        </div>
        <div>
            <p>Party</p>
        </div>
        <div>
            <p>Gym</p>
        </div>
</div>
</>  )
}
