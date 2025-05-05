'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Button from '@/components/Button/button'; // adjust path based on your folder
import Input from '@/components/Input/input'; // adjust path based on your folder

function Login() {
    const navigate = useRouter();

    const signup = () => {
        console.log("create account ")
        navigate.push("/signup")
    }
    const [name, setname] = useState("")
    const [passcode, setpasscode] = useState("")

    const submit = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log("clicked on submit")
        navigate.push("/home")
        const data = { name, passcode }

        axios.post('http://localhost:5001/', data)
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));

        console.log(data)
    }

    return (
        <div className='w-full h-screen '>

            {/* <img
        className='duration-1000 absolute inset-0 w-full h-full object-cover z-0'
        src="https://images.pexels.com/photos/11588681/pexels-photo-11588681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      /> */}

            <div className='w-full h-full  z-10  flex-col flex items-center  bg-black '>
                <div className='w-1/2  flex items-center justify-center m-10'>
                    <h1 className='text-[3rem] text-white font-black justify-center text-center w-full text-shadow-lg/30 animate-pulse '>Welcome to Dashboard</h1>
                </div>
                <div className='App w-1/2 h-2/3   flex items-center justify-center'>
                    <div className='duration-700 bg-[rgba(0,0,0,0.6)] border-2 rounded-lg shadow-xl shadow-white p-3 h-2/3 w-2/4 items-center justify-center flex flex-col drop-shadow-[0_0_10px_rgba(255,0,0,0.5)] text-white hover:border-red-600 hover:duration-500 hover:shadow-red-600'>
                        <div className='w-full flex justify-center items-center'>
                            <h1 className='text-white text-2xl font-bold'>Login</h1>
                        </div>
                        <div className='w-2/3 mt-2 flex '>

                            <Input
                                classname='w-full h-10 rounded-xl bg-slate-100 text-black'
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
                                type="password"
                                placeholder="Passcode"
                                required={true}
                                value={passcode}
                                onChange={(e) => setpasscode(e.target.value)}
                            />
                        </div>

                        <Button onClick={submit} label="Submit" className='mt-5 font-semibold bg-red-300 px-5 py-1 text-black rounded-xl w-auto hover:bg-red-500 hover:text-white duration-300 hover:font-bold' />
                        <div className='w-full  flex flex-col items-center'>
                            <Button onClick={signup} label="Signup ?" className='mt-5 font-semibold bg-red-300 px-5 py-1 text-black rounded-xl w-auto hover:bg-red-500 hover:text-white duration-300 hover:font-bold' />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
