"use client"



export const SignUp = () => {
   
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

<button >Login with Google</button>
{/* <button onClick={() => login()}>Sign in with Google 🚀</button>; */}


        </form>
      </div>
    </div>
  );
}
