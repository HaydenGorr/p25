'use client'
import FadeInWrapper from '../../home-page-components/animation_wrappers/fade_in_wrapper'
import type { Entry } from 'contentful';
import { GameDesignEntry } from '../../interfaces/api_interfaces/game_design_interfaces'
import RichText from '../components/rich_text_renderer'
import { useState } from 'react';

interface props {
	game_design_item: Entry<GameDesignEntry>
}

const GameDesignCompactContainer = ({ game_design_item }: props) => {

	const [hovering, set_hovering] = useState<boolean>(false)

return (
	<FadeInWrapper>
	<div key={game_design_item.sys.id} className='shadow-xl rounded-xl p-4' onMouseOver={()=>set_hovering(true)} onMouseOut={()=>set_hovering(false)}>
					
		<h2 className='text-gd-text-primary mb-4'>{`${game_design_item.fields.title}`}</h2>

		<div className='flex space-x-4 text-xs mb-8 overflow-x-auto whitespace-nowrap'>
			<p className='bg-gd-bg-dark rounded-full text-black/80 px-4 py-0 flex-shrink-0'>{`${game_design_item.fields.status}`}</p>
			{Array.isArray(game_design_item?.fields?.genre) && game_design_item.fields.genre.map((genre, index) => (
				<p key={index} className='bg-gd-secondary rounded-full px-4 py-0 flex-shrink-0 text-white/80'>
					{genre}
				</p>
			))}
		</div>
		
		<div className='w-full h-[1px] bg-black/20 my-4 mb-4'/>

		<RichText content={game_design_item.fields.overview}/>

		<div className='flex space-x-4'>
			{Array.isArray(game_design_item?.fields?.screenshots) && game_design_item.fields.screenshots.map((screenshots)=>{
				return (
				<div className='rounded-xl' key={screenshots.sys.id}>
					<img className='object-contain max-h-56 h-full w-auto rounded-xl' src={screenshots.fields.file.url}></img>
				</div>
				)
			})}
		</div>

		<div className='w-full text-end'>
		<button className='mt-4 w-fit p-4 rounded-xl text-end -translate-x-4 hover:translate-x-0 duration-300 bg-gd-primary text-gd-bg-light'>take a look →</button>
		</div>
	</div>
	</FadeInWrapper>
)
}

export default GameDesignCompactContainer