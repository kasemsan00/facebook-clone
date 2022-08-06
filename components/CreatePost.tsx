import Image from "next/image"
import { useState } from "react"

export default function CreatePost () {

    const [showCreatePost, setShowCreatePost] = useState(false);

    return (
        <>
            <div className="flex h-14 bg-white rounded-xl drop-shadow-sm">
                <div className='flex self-center m-3' >
                    <Image className='justify-center rounded-full w-20' src={require('../assets/display.jpg')} />
                </div>
                <div 
                    className='flex flex-1 self-center text-lg cursor-pointer h-10 items-center font-light text-gray-500 pl-3 pr-3 m-1 rounded-3xl w-full focus:outline-none bg-slate-100' 
                    onClick={()=>setShowCreatePost(true)}
                >
                    What's on your mind, Kasemsan?
                </div>
            </div>
            <div className={`fixed inset-1/3 flex-1 flex-col rounded-xl items-center bg-white drop-shadow-xl ${!showCreatePost? `hidden`:``}`} >
                <div className="flex items-center my-3 justify-center self-center font-bold text-sm">
                    Create Post
                    <div 
                        className="fixed right-3 cursor-pointer"
                        onClick={() => setShowCreatePost(false)}
                    >
                        Close
                    </div>
                </div>
                <div className="flex w-full border-solid border-t border-gray-200">
                    <div className='flex self-center m-3 w-16' >
                        <Image className='justify-center rounded-full w-20' src={require('../assets/display.jpg')} />
                    </div>
                    <div className="flex flex-col justify-center w-full">
                        <div className="flex text-xs font-medium mb-1">
                            Kasemsan Chompuwised
                        </div>
                        <div className="flex justify-center w-16 text-xs font-medium text-center rounded-xl bg-slate-200">
                            Only me
                        </div>
                    </div>
                </div>
                <div className="flex w-full ">
                    <textarea 
                        className="mx-3 px-2  w-full resize-none focus:outline-none" 
                        placeholder="What's on your mind Kasemsan?" 
                        rows={4}
                    >
                    </textarea>
                </div>
            </div>
        </>

    )
}