'use client';
import Button from "@/components/Button/button";
import Input from "@/components/Input/input";
import axios from "axios";
import { useEffect, useState } from "react";

function WeatherPage() {
    const [location, setLocation] = useState("");
    const weathercheck = () => {
        if (!location)
            return;
        weather();
        console.log(location);

    }
    const [report, setReport] = useState<any>({});
    const img = (): any => {

        const day = report.current?.is_day;
        const condition = report.current?.condition?.text;
        if (!condition) return null;

        if (day === 1) {
            if (condition.includes("Sunny")) {
                return "url('https://i.pinimg.com/736x/7e/84/1c/7e841cb1223977ca0f8d54643368b512.jpg')"
            }
            else if (condition.includes("Cloudy")) {
                return "url('https://i.pinimg.com/736x/09/e5/48/09e548cb762347e90fb0749ebadf4c0c.jpg')"
            }
            else if (condition.includes("Rain")) {
                return "url('https://i.pinimg.com/736x/b9/77/c9/b977c910ccb163e208b64f37d3407455.jpg')"
            }
            else if (condition.includes("Mist")) {
                return "url('https://i.pinimg.com/736x/92/6e/f6/926ef6fb612806dbcb8a5b769dd40086.jpg')"
            }
            else {
                return "url('https://i.pinimg.com/736x/9d/53/7f/9d537fe312f20f3ca79d4de67b479010.jpg')"
            }
        }
        else {
            if (condition.includes("Rain")) {
                return "url('https://i.pinimg.com/736x/3c/8e/b0/3c8eb0ebbdf130b3025c3d6ae30917c2.jpg')";
            } else if (condition.includes("Cloudy")) {
                return "url('https://i.pinimg.com/736x/71/a4/92/71a492bb3b94862b3e120fe6a0dc27ce.jpg')";
            } else if (condition.includes("Mist")) {
                return "url('https://i.pinimg.com/736x/a5/ca/ab/a5caab06762a9ce8197084733f8eca71.jpg')";
            } else if (condition.includes("Light_rain")) {
                return "url('https://i.pinimg.com/736x/3c/8e/b0/3c8eb0ebbdf130b3025c3d6ae30917c2.jpg')";
            }
            else {
                return "url('https://i.pinimg.com/736x/ed/66/29/ed6629ed6924bf73aac8424ab867a77c.jpg')";
            }
        }
    }
    const weather = () => {

        axios.get(`http://api.weatherapi.com/v1/current.json?key=f99868c2570440a1bd3120828251002&q=${location}&aqi=no`)
            .then((res) => {
                const data = res.data;
                console.log(data);
                setReport(data);
            })
            .catch((err) => {
                console.error(err);
            })
    }
    useEffect(() => {
        weather();
        alert("Please enter the location");
    }, [])
    return (
        <>
            <div className="h-screen w-full flex flex-col items-center bg-conic bg-no-repeat bg bg-cover" style={{ backgroundImage: img() }} >
                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
                <div className="w-full h-max flex items-center justify-center mt-10 z-50 ">
                    <h1 className="text-5xl font-bold">Weather Forecast</h1>
                </div>
                <div className="flex justify-center items-center gap-4 h-fit w-full max-w-xl z-50 mb-10 mt-5">
                    <div className="w-full h-fit">
                        <Input classname="m-0 w-full p-2 rounded-xl bg-slate-100 text-black" type="text" placeholder="Enter the location" required={true} value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <Button onClick={weathercheck} label=" Search" className="w-fit m-0 p-2 border-2 rounded-2xl" />
                </div>

                <div className="h-2/3 w-full flex justify-center items-center " >
                    <div className="border-2 rounded-lg  w-1/3 h-full  text-white hover:duration-500 bg-center bg-no-repeat z-20" style={{ backgroundImage: img() }} >
                        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay */}

                        <div className="relative bg-center bg-no-repeat">
                            <div className="flex items-center p-5">
                                <h1 className="text-white text-4xl font-black">{report.current?.condition?.text} </h1>
                                <img src={report.current?.condition?.icon} alt="" />
                            </div>
                            <div className="flex justify-center items-center w-full mt-20">
                                <h1 className="text-white text-4xl font-black ">{report.location?.name}</h1>

                            </div>
                            <div className="flex justify-center items-center w-full pt-2">
                                <h1 className="text-white text-xl font-bold">Current Time = {report.location?.localtime}</h1>

                            </div>
                            <div className="flex justify-around items-center w-full pt-5 mt-5 mb-5">
                                <div className="flex flex-col items-center">
                                    <h1 className="text-white text-2xl font-bold flex flex-col justify-items-center w-full">Current Temperature</h1>
                                    <h1 className="text-white text-2xl font-bold flex flex-col justify-center items-center w-full">{report.current?.temp_c}</h1>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-white text-2xl font-bold">Wind speed </h1>
                                    <h1 className="text-white text-2xl font-bold">{report.current?.wind_kph}</h1>
                                </div>
                            </div>
                            <div className="flex justify-center items-center w-full pt-2">
                                <h1 className="text-white text-xl font-black">Humidity = {report.current?.humidity}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default WeatherPage;