"use client"

import { hasGrantedAllScopesGoogle, useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";


export const SignUp = () => {
     useEffect(() => {
        // This code will run only in the browser, not on the server
        console.log("Window object: ", window);
    }, []);
    // const router = useRouter();
//   cid   // 1077512729862-c5rvioghn5gretuli7upl9j7dk1ch6no.apps.googleusercontent.com
//csk //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
  const handleGoogleLoginSuccess = (response) => {
    // Send Google credential token to backend to verify and get user info
    console.log(response,'tttt');
    
    fetch('http://localhost:3000/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: response.credential,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // After successful login, you might redirect or handle session
        // if (data.success) {
        //   router.push("/dashboard"); // Redirect to dashboard after login
        // } else {
        //   console.error("Login failed");
        // }
        console.log(data,'ttt');
        
      })
      .catch((error) => console.error("Error during login", error));
  };

  const handleGoogleLoginFailure = () => {
    console.log("Google login failed");
  };

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
        console.log(codeResponse,'tt');
        // const tokens = await axios.post(
        //     'http://localhost:3001/auth/google', {
        //         code: codeResponse.code,
        //     });

        // console.log(tokens);
    },
    onError: errorResponse => console.log(errorResponse), 
    // ux_mode: 'redirect',  // This ensures that login happens in the same tab
    redirect_uri: 'http://localhost:3000/', // Set the proper redirect URI
    scope: 'openid profile email',  // Correct scopes,
    prompt: 'select_account',  // Ensures the account selection page is always shown

});
const hasAccess = hasGrantedAllScopesGoogle(
  'google-scope-1',
  'google-scope-2',
);
// const login = useGoogleLogin({
//   onSuccess: tokenResponse => console.log(tokenResponse,'tt'),    flow: 'auth-code',
//   cancel_on_tap_outside:true

// });

  return (
    <div>
      <h1>Login with Google</h1>
      <div>
        <form style={{
          
          display:'flex',flexDirection:'column',rowGap:'2rem'
        }}>
          <input type='text' placeholder='Name'/>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='Password'/>

<button onClick={()=>{googleLogin()}}>Login with Google</button>
{/* <button onClick={() => login()}>Sign in with Google 🚀</button>; */}


        </form>
      </div>
    </div>
  );
}
