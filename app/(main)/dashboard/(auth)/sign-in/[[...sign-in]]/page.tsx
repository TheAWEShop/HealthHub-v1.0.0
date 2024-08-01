import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='h-screen w-sccreen m-0 flex items-center justify-center bg-transparent'>
      <SignIn   />
    </div>
  );
};
