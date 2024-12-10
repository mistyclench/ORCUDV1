import Link from 'next/link';
import Image from 'next/image';


export default function OrcLogo() {
  return (
    <main>
      <Link 
        key='Home' 
        href='/'
        className='flex flex-row divide-violet-950 divide-x-2'          
      >
      <div className=''>
          <Image
          src="/ORC-logo.png"
          width={35}
          height={35}
          className="block items-center p-1"
          alt="ORC Logo"
          />
      </div>
  
      <p className='text-[10px] h-8 p-1'> OFFICE OF<br/> THE REGISTRAR<br/> OF COMPANIES</p>

      </Link>
        </main>
  );
}
