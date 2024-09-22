"use client"
import { Button, Card } from '@mui/material';
import TextField from '@mui/material/TextField';
// import googleLogo from '../../../image/search.png';
import Image from 'next/image';
import googleLogo from '../image/search.png';

import '../styles/login.css';
export const Login = () => {
    return (
        <>
            <Card className='cardSignup'>
               
                <div className='form_Contner'>

                    <TextField
                        type='email'
                        className='inputFld'

                        // error
                        id="outlined-error-helper-text"
                        label="Email "
                  
                    />
                    
                    <TextField
                        type='password'
                        className='inputFld'

                        // error
                        id="outlined-error-helper-text"
                        label="Password "
                    // defaultValue="Hello World"
                    // helperText="Incorrect entry."
                    />
                    <div className='inputFldBtn'>
                        <Button color='primary'
                            variant="contained">Log In</Button>
                    </div>
                    <div className='inputFldBtn'>
                        <Button color='primary'
                            variant="outlined"><Image src={googleLogo} width={25} hight={20} />&nbsp; Log In With Google</Button>
                    </div>
                </div>


                {/* </Box> */}
            </Card>





        </>)
}
