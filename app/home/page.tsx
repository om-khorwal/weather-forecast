'use client';
import Button from '@/components/Button/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const Navigate = useRouter();
  const newpage = () => {
    Navigate.push("/newpage")
  }
  const weatherapi = () => {
    Navigate.push("/weather")
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true')
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.error(err);
    })
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Welcome Home!</h1>
      <div className='w-full mt-5 flex flex-col items-center'>
        <Button  onClick={weatherapi} label='Weather API' className=' mt-5 font-semibold bg-blue-300 px-5 py-1 text-black rounded-xl w-auto hover:bg-blue-500 hover:text-white duration-300 hover:font-bold'/>
      </div>
      <div className='w-full mt-5 flex flex-col items-center'>
        <Button  onClick={newpage} label='New Page' className=' mt-5 font-semibold bg-blue-300 px-5 py-1 text-black rounded-xl w-auto hover:bg-blue-500 hover:text-white duration-300 hover:font-bold'/>
      </div>
      </div>
    </>
  );
}
