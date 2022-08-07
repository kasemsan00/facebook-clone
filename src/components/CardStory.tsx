import Image from "next/image";

export default function CardStory () {
    return (
        <div className='flex h-30 '>
            <ul className="flex flex-1 columns-auto ">
                <li className="flex mt-5 mb-5 mr-2 rounded-lg h-52 w-32 drop-shadow-sm bg-white">
                    <Image className="rounded-lg" alt='card1' priority={true} src={require('../assets/card/card1.jpg')} />
                </li>
                <li className="flex mt-5 mb-5 mr-2 rounded-lg h-52 w-32 drop-shadow-sm bg-white">
                    <Image className="rounded-lg" alt='card2' priority={true} src={require('../assets/card/card2.jpg')} />
                </li>
                <li className="flex mt-5 mb-5 mr-2 rounded-lg h-52 w-32 drop-shadow-sm bg-white">
                    <Image className="rounded-lg" alt='card3' priority={true} src={require('../assets/card/card3.jpg')} />
                </li>
                <li className="flex mt-5 mb-5 mr-2 rounded-lg h-52 w-32 drop-shadow-sm bg-white">
                    <Image className="rounded-lg" alt='card4' priority={true} src={require('../assets/card/card4.jpg')} />
                </li>
                <li className="flex mt-5 mb-5 rounded-lg h-52 w-32 drop-shadow-sm bg-white">
                    <Image className="rounded-lg" alt='card5' priority={true} src={require('../assets/card/card5.jpg')} />
                </li>
            </ul>
        </div>
    )
}