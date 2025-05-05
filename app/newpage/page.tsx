'use client'
import React, { useState } from "react";
import Hamburger from "@/assets/hamburger";
function newpage() {
    type FormData = {
        quantity: string;
        size: string;
        pages: string;
        paperType: string;
    };

    const [inputValue, setInputValue] = useState<FormData>({
        quantity: '',
        size: "",
        pages: '',
        paperType: "",
    })
    const [total, setTotal] = useState(Number())

    const totalCalculation = () => {
        const finalquantity = Number(inputValue.quantity);
        const finalpages = Number(inputValue.pages);
        const total_amount = (finalpages * finalquantity * 20);
        setTotal(total_amount);
        console.log(inputValue.quantity, inputValue.pages, inputValue.paperType, inputValue.size + " and the total amount is " + total_amount);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInputValue(prev => ({ ...prev, [name]: value, }));
    };
    const printpdf = () => {
        const pdfData = `
            <h1>Quotation</h1>
            <p>Total Quantity: ${inputValue.quantity}</p>
            <p>Page Size: ${inputValue.size}</p>
            <p>Total Pages: ${inputValue.pages}</p>
            <p>Paper Type: ${inputValue.paperType}</p>
            <p>Total Amount: ${total}</p>
        `;
        const pdfWindow = window.open();
        if (pdfWindow) {
            pdfWindow.document.write('<html><head><title>Quotation</title></head><body>');
            pdfWindow.document.write(pdfData);
            pdfWindow.document.write('</body></html>');
            pdfWindow.document.close();
            pdfWindow.print();
        }
        else {
            console.error("Failed to open new window for PDF.");
        }
    }
    return (
        <>
            {/* //header */}
            <div className="bg-blue-50 h-screen w-full p-8 ">
                <div className="w-full flex flex-col ">

                    <div className="flex w-full h-22 justify-between items-center  ">


                        {/* MAIN     */}
                        <div className="w-1/2 flex items-center gap-5  ">
                            <div>
                                <img src="/" alt="img" className="p-0" />
                            </div>
                            <div className="flex">
                                <div>
                                    <h1 className="text-5xl text-[#22a5f1]  font-bold">PrintCosta</h1>
                                    <p className="text-sm text-gray-600">PRINTING QUATATION, SIMPLIFIED.</p>
                                </div>
                            </div>
                            <div>
                                <img src="/" alt="img" className="p-0" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold  text-black">Parnami Printers</h1>
                            </div>
                        </div>

                        <div className=" w-1/2 flex items-center justify-end gap-5">
                            <div>
                                <h2 className="pl-5 pr-5 pt-2 pb-2 bg-blue-500 text-[0.9rem] text-fit  text-white duration-700 rounded-lg transition active:scale-95">New Quotation</h2>
                            </div>
                            <div>
                                <input type="text" name="search" className="text-black p-1 rounded-2xl border-2 border-black " placeholder=" Search the data" id="" />
                            </div>
                            <div>
                                <button className="bg-blue-500 p-2 rounded-lg hover:scale-105 duration-700 transition active:scale-95">
                                    <Hamburger className="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="text-black w-full flex" />
                </div>
                {/* // section 1 */}
                <div className=" mt-10 flex gap-10 itemns-center  ">
                    <h1 className="text-black text-2xl font-bold items-center flex">
                        Books/Booklets
                    </h1>
                    <div className="flex gap-5 items-center">
                        <div>
                            <p className="text-black">Quantity</p>
                            <input type="number" name="quantity" value={inputValue.quantity} onChange={handleChange} className="border-2 text-black border-black rounded-xl text-center" />
                        </div>
                        <div>
                            <p className="text-black">Size</p>
                            <select name="size" value={inputValue.size} onChange={handleChange} className="border-2 text-black border-black pl-4 flex justify-center pr-4 rounded-2xl text-base">
                                <option value=""> None</option>
                                <option value="A4"> A4</option>
                                <option value="A3">A3</option>
                                <option value="letter">letter</option>
                                <option value="legal">legal</option>
                            </select>
                        </div>

                    </div>
                    <hr />
                </div>
                {/* //section 2 */}
                <div className="flex mb-5 gap-10 itemns-center ">
                    <div>
                        <h1 className="text-blue-900 text-xl">Total Calculation</h1>
                        <div>
                            <p className="text-black">Pages</p>
                            <input name="pages" onChange={handleChange} value={inputValue.pages} type="number" className="border-2 text-black border-black rounded-xl text-center" />
                        </div>
                    </div>
                    <div className="text-black">
                        <h1 className="text-xl">Present</h1>
                        <div className="text-black flex flex-col ">
                            <label>Paper Type: </label>
                            <select name="paperType" className="border-2 border-black mb-2" value={inputValue.paperType} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Maphleto">Maphleto</option>
                                <option value="Glossy">Glossy</option>
                                <option value="Matte">Matte</option>
                                <option value="Bond">Bond</option>
                                <option value="Recycled">Recycled</option>
                            </select>
                            <label> Paper Rate:
                                <span className="text-blue-900 font-bold">
                                    Rs 20/kg
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className=" text-black gap-10 itemns-center ">
                    <h1 className="text-2xl font-bold">
                        Display the selected details
                    </h1>
                    <p> Total Quantity : {inputValue.quantity}</p>
                    <p> Page Size  : {inputValue.size}</p>
                    <p> Total Page : {inputValue.pages}</p>
                    <p> Page Type  : {inputValue.paperType}</p>
                    <p> Total amount = {total}</p>

                </div>
                <div className="flex  gap-2 mt-5">
                    <button className="border-2 flex border-black text-black shadow-2xl  hover:scale-105 duration-700 px-4 py-2 rounded-lg transition active:scale-95" onClick={totalCalculation}>Get Amount</button>
                    <button className="border-2 flex border-black text-black shadow-2xl  hover:scale-105 duration-700 px-4 py-2 rounded-lg transition active:scale-95" onClick={printpdf}>Get PDF</button>
                </div>

            </div>

        </>
    );
}

export default newpage
