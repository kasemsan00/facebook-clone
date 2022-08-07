import Head from 'next/head'
import Content from '../src/components/Content'
import Navigation from '../src/components/Navigation'
import Complementary from '../src/components/Complementary'

export default function Home() {
	return (
		<>
			<Head>
				<title>Facebook Clone</title>
			</Head>
			<div className='flex flex-1' >
				<div className='flex flex-1 flex-col bg-gray-100 '>
					<Navigation/>
				</div>
				<div className='flex flex-1 flex-col bg-gray-100'>
					<Content/>
				</div>
				<div className='flex flex-1 bg-gray-100'>
					<Complementary/>
				</div>
			</div>

			{/* <div className='flex flex-row drop-shadow-md bg-gray-400'>

				

			</div> */}
		</>
	)
}
