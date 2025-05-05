'use client'
import { useState } from 'react';
import Button from '@/components/Button/button';
import Input from '@/components/Input/input';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function Signup() {
  const navigate = useRouter();

  const login = () => {
    navigate.push("/login")
  }

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [passcode, setpasscode] = useState("")

  const submit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("clicked on submit")
    const data = { name, passcode }

    axios.post('http://localhost:5001/', data)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));

    console.log(data)
  }

  return (
    <div className='w-full h-screen relative'>

      {/* <img
        className='absolute inset-0 w-full h-full object-cover z-0'
        src="https://images.pexels.com/photos/6379760/pexels-photo-6379760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      /> */}
      {/* bg-[linear-gradient(to_left,rgba(0,0,0,1),rgba(0,0,0,0.7),rgba(0,0,0,0.3))] */}
      <div className='w-full h-full  z-10  flex-col flex items-center  bg-black '>
        <div className='w-1/2  flex items-center justify-center m-10'>
          <h1 className='text-[3rem] text-white font-black justify-center text-center w-full text-shadow-lg/30 animate-pulse '>Welcome to Dashboard</h1>
        </div>
        <div className='App w-1/2 h-2/3 flex items-center justify-center'>
          <div className='duration-700 bg-[rgba(0,0,0,0.6)] border-2 rounded-lg shadow-xl shadow-white p-3 h-2/3 w-2/4 items-center justify-center flex flex-col drop-shadow-[0_0_10px_rgba(255,0,0,0.5)] text-white hover:border-red-600 hover:duration-500 hover:shadow-red-600'>
            <div className='w-full flex justify-center items-center'>
              <h1 className='text-white text-2xl font-bold'>Signup</h1>
            </div>
            <div className='w-2/3 mt-2 flex '>
              <Input
                classname='flex justify-center  w-full h-10 rounded-xl bg-slate-100 text-black'
                type="text"
                placeholder="Username"
                required={true}
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <div className='w-2/3 mt-2 flex '>
              <Input
                classname='w-full h-10 rounded-xl bg-slate-100 text-black'
                type="email"
                placeholder="Email"
                required={true}
                value={email}
                onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className='w-2/3 mt-2 flex '>

            <Input
            classname='w-full h-10 rounded-xl bg-slate-100 text-black'
              type="password"
              placeholder="Passcode"
              required={true}
              value={passcode}
              onChange={(e) => setpasscode(e.target.value)}
              />
              </div>
            <div className='w-full mt-5 flex flex-col items-center'>
              <Button onClick={submit} label='Submit' className='font-semibold bg-red-300 px-5 py-1 text-black rounded-xl w-auto hover:bg-red-500 hover:text-white duration-300 hover:font-bold' />
            </div>
            <div className='w-full mt-5 flex flex-col items-center'>
              <Button onClick={login} label="Login" className='font-semibold bg-red-300 px-5 py-1 text-black rounded-xl w-auto hover:bg-red-500 hover:text-white duration-300 hover:font-bold' />

            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Signup;
