import Image from "next/image"

export default function CreatePost () {

    const handleCreatePost = () => {
        console.log('Create Post')
    }

    return (
        <div className="flex h-14 bg-white rounded-xl drop-shadow-sm">
            <div className='flex self-center m-3' >
                <Image className='justify-center rounded-full w-20' src={require('../assets/display.jpg')} />
            </div>
            <div 
                className='flex flex-1 self-center text-lg cursor-pointer font-light text-gray-500 pl-3 pr-3 m-2 rounded-3xl w-full focus:outline-none bg-slate-100' 
                onClick={handleCreatePost}
            >
                What's on your mind, Kasemsan?
            </div>
        </div>
    )
}