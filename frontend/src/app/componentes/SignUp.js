"use client"
import { Button, Card } from '@mui/material';
import TextField from '@mui/material/TextField';
// import googleLogo from '../../../image/search.png';
import Image from 'next/image';
import googleLogo from '../image/search.png';

import '../styles/signup.css';
export const SignUp = () => {
    return (
        <>
        <Card className='cardSignup'>
        {/* <Box
                component="form"
              
                noValidate
                autoComplete="off"
            > */}
                <div className='form_Contner'>
                    <TextField
                    // style={{width:"50%"}}
                    className='inputFld'
                    type='text'
                        // errorPlease fill Name valid
                        id="outlined-error"
                        label="User Name"
                       
                        // defaultValue="Hello World"
                    />
                    {/* <input type='text' className='inputFld' id="outlined-error"
 placeholder='Name' /> */}
                    <TextField
                    type='email'
                    className='inputFld'

                        // error
                        id="outlined-error-helper-text"
                        label="Email "
                        // defaultValue="Hello World"
                        // helperText="Incorrect entry."
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
  variant="contained">Sign Up</Button>
                    </div>
                    <div className='inputFldBtn'>
                    <Button color='primary'  
  variant="outlined"><Image src={googleLogo} width={25} hight={20}/>&nbsp; Sign Up With Google</Button>
                    </div>
                </div>
                
               
            {/* </Box> */}
        </Card>
          




        </>)
}
