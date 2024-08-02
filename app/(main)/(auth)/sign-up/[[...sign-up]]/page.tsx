import { SignUp } from '@clerk/nextjs';


const SignUpPage = () => {

  return (
    <div className='h-screen w-sccreen m-0 flex items-center justify-center bg-transparent'>
      <SignUp  forceRedirectUrl={"additional-details"} />
    </div>
  );
};

export default SignUpPage;
