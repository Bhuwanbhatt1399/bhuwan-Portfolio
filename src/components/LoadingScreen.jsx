import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
    //this will track our text (lenght of the text )
    const [text, setText] = useState("")
    const fullText = "<Hello World/>";

    //useEffect runs after the component renders
    // onComplete is used here to communicate from child to parent. and Types text ,Stops animation ,Parent  ,Loader disappears , App can move forward
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++;
            //Text types letter by letter,Animation is running

            if (index > fullText.length) {
                clearInterval(interval)
                //Animation stops
                //Typing is finished

                setTimeout(() => {
                    onComplete()
                }, 1000)
                //calling the function (parent )
            }
        }, 100)

        return () => clearInterval(interval)
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center ">

            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> |</span> 
                 </div>


            <div className="w-50 h-0.5 bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                    {""}
                </div>
            </div>
        </div>

    )
};

export default LoadingScreen;