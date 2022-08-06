import Image from 'next/image'

export default function Navigation () {
    return (
        <>
            <div className='flex drop-shadow-sm w-full h-14 bg-white' >
                <div className='flex self-center ml-5 mr-2 w-auto cursor-pointer '>
                    <Image width={40} height={40} src={require('../assets/facebook-logo.png')} />
                </div>
                <input 
                    className='w-6/12 text-base pl-3 pr-3 focus:outline-none rounded-full border-ra m-2 bg-gray-100'
                    type='text' 
                    placeholder='Search Facebook'
                />
            </div>
            <div className='flex-1'>
                <ul> 
                    <li className='flex flex-1 m-2 pl-2 pr-2 rounded-lg mgin hover:bg-gray-200 cursor-pointer '>
                        <div className='flex ml-2 mr-2 mt-2 mb-2 self-center'>
                            <Image 
                                width={30}
                                height={30}
                                src={require('../assets/user.png')} 
                            />
                        </div>
                        <div className='flex flex-1 self-center font-medium text-sm'>
                            Kasemsan Chompuwised
                        </div>
                    </li>
                    <li className='flex flex-1 m-2 pl-2 pr-2 rounded-lg mgin hover:bg-gray-200 cursor-pointer '>
                        <div className='flex ml-2 mr-2 mt-2 mb-2 self-center'>
                            <Image 
                                width={30}
                                height={30}
                                src={require('../assets/friends.png')} 
                            />
                        </div>
                        <div className='flex flex-1 self-center font-medium text-sm'>
                            Friends
                        </div>
                    </li>
                    <li className='flex flex-1 m-2 pl-2 pr-2 rounded-lg mgin hover:bg-gray-200 cursor-pointer '>
                        <div className='flex ml-2 mr-2 mt-2 mb-2 self-center'>
                            <Image 
                                width={30}
                                height={30}
                                src={require('../assets/connection.png')} 
                            />
                        </div>
                        <div className='flex flex-1 self-center font-medium text-sm'>
                            Groups
                        </div>
                    </li>
                    <li className='flex flex-1 m-2 pl-2 pr-2 rounded-lg mgin hover:bg-gray-200 cursor-pointer '>
                        <div className='flex ml-2 mr-2 mt-2 mb-2 self-center'>
                            <Image 
                                width={30}
                                height={30}
                                src={require('../assets/store.png')} 
                            />
                        </div>
                        <div className='flex flex-1 self-center font-medium text-sm'>
                            Marketplace
                        </div>
                    </li>
                    <li className='flex flex-1 m-2 pl-2 pr-2 rounded-lg mgin hover:bg-gray-200 cursor-pointer '>
                        <div className='flex ml-2 mr-2 mt-2 mb-2 self-center'>
                            <Image 
                                width={30}
                                height={30}
                                src={require('../assets/video-marketing.png')} 
                            />
                        </div>
                        <div className='flex flex-1 self-center font-medium text-sm'>
                            Watch
                        </div>
                    </li>
                    <li className='flex flex-1 m-2 pl-2 pr-2 rounded-lg mgin hover:bg-gray-200 cursor-pointer '>
                        <div className='flex ml-2 mr-2 mt-2 mb-2 self-center'>
                            <Image 
                                width={30}
                                height={30}
                                src={require('../assets/more-or-less.png')} 
                            />
                        </div>
                        <div className='flex flex-1 self-center font-medium text-sm'>
                            See more
                        </div>
                    </li>
                </ul>
            </div>
        </>
        

    )
}