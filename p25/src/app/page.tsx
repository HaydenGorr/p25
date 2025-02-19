import Link from 'next/link'
import PortfolioLink from './home-page-components/portfolio-link'
import { Home_Page } from './string_consts.json'
const portfoliolinks = Home_Page.Portfolio_links
const AiChatFeature = Home_Page.AI_Chat_Feature
import FadeInWrapper from './home-page-components/animation_wrappers/fade_in_wrapper'
import StaggerItem from './home-page-components/animation_wrappers/stagger_item_wrapper'
import StaggerWrapper from './home-page-components/animation_wrappers/stagger_wrapper'
const HomePage = () => {
return (
	<FadeInWrapper>
	<main className="min-h-screen px-8" style={{backgroundColor: "#efeee7"}}>
	<StaggerWrapper>
	{/* Hero Section */}
	<StaggerItem>
	<section className="text-black/90 h-[30rem] max-h-screen flex justify-center items-center">
	{/** The translate is a hack to get it centred. Figure out a proper solution later */}
		<div className="max-w-[90rem] flex flex-col">
			<h1 className="font-bold mb-3 text-center">
				{Home_Page.Title}
			</h1>
			<p className="text-sm mb-8 text-black/50 text-center">
				{Home_Page.Subtitle}
			</p>
		</div>
		
	</section>
	</StaggerItem>

	{/** AI chat feature */}
	<StaggerItem>
	<section className='w-full py-4 max-w-[90rem] mx-auto mb-28'>
		<div className='flex flex-col sm:flex-row rounded-xl shadow-2xl p-8 bg-amber-300/40'>
		<div className='w-full sm:w-1/3 mb-8 sm:mb-0 sm:mr-8 h-full'>
			<img 
			src={"/background/1.png"} 
			className='w-full h-full max-h-64 rounded-xl object-cover '
			/>
		</div>
		<div className='w-full sm:w-2/3 flex flex-col'>
			<h2 className='font-bold  w-fit mx-auto mb-8'>{AiChatFeature.Title}</h2>
			<p className='text-black/70 flex flex-grow'>{Home_Page.AI_Chat_Feature.Subtitle}</p>
			<button className='bg-home_page-secondary/80 w-fit text-black px-8 py-2 rounded-xl mt-4 mx-auto shadow-lg duration-300 transition-colors hover:bg-Home_Page-secondary'>{Home_Page.AI_Chat_Feature.Button}</button>

			{/* <div className='w-fit mx-auto'>
			<TestButton/>
			</div>	 */}
		</div>
		</div>
	</section>
	</StaggerItem>
	

	{/* Portfolio Sections */}
	<StaggerItem>
	<section className="max-w-[90rem] mx-auto py-16 w-full">
		<h2 className='font-bold mx-auto w-fit mb-8'>{Home_Page.Portfolio_links.Title}</h2>
		<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
			<PortfolioLink href={"/game-writing"} img={"/background/1.png"} title={portfoliolinks.Game_Writing.Title} subtitle={portfoliolinks.Game_Writing.Subtitle}/>
			<PortfolioLink href={"/game-design"} img={"/background/2.png"} title={portfoliolinks.Game_Design.Title} subtitle={portfoliolinks.Game_Design.Subtitle}/>
			<PortfolioLink href={"/software-engineering"} img={"/background/3.png"} title={portfoliolinks.Software_Engineering.Title} subtitle={portfoliolinks.Software_Engineering.Subtitle}/>
			<PortfolioLink href={"/creative-writing"} img={"/background/4.jpg"} title={portfoliolinks.Creative_Writing.Title} subtitle={portfoliolinks.Creative_Writing.Subtitle}/>
		</div>
	</section>
	</StaggerItem>

	{/* Archive */}
	<StaggerItem>
	<section className="py-16">
		<div className="max-w-[90rem] mx-auto text-center">
		<h2 className="text-3xl font-bold text-slate-900 mb-6">
			Archive
		</h2>
		<p className="text-lg text-slate-600 mb-8">
			This is where all the content that didn't make the portfolio goes.
		</p>
		<Link href="/about"
				className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300">
			Visit Archive
		</Link>
		</div>
	</section>
	</StaggerItem>

	{/* About Section Preview */}
	<StaggerItem>
	<section className="py-16 ">
		<div className="max-w-[90rem] mx-auto text-center">
		<h2 className="text-3xl font-bold text-slate-900 mb-6">
			About Me
		</h2>
		<p className="text-lg text-slate-600 mb-8">
			I'm a multidisciplinary creator focused on crafting engaging narratives and experiences across different mediums.
		</p>
		<Link href="/about"
				className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300">
			Learn More
		</Link>
		</div>
	</section>
	</StaggerItem>
	
	</StaggerWrapper>
	</main>
	</FadeInWrapper>
)
}

export default HomePage