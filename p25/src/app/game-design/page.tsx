'use client'
import Link from 'next/link'
import { Game_Design } from '../string_consts.json'
import FadeInWrapper from '../home-page-components/animation_wrappers/fade_in_wrapper'
import { useEffect, useState, useRef } from 'react'
import { createClient } from 'contentful';
import type { ContentfulClientApi, Entry } from 'contentful';
import { GameDesignEntry } from '../interfaces/api_interfaces/game_design_interfaces'
import RichText from './components/rich_text_renderer'
import GameDesignCompactContainer from './components/game_design_compact_container'
import GameDesignLargeContainer from './components/game_design_large_container'

const GameDesign = () => {
	const ContentfulClient = useRef<ContentfulClientApi<undefined>>(null);
	const [error, set_error] = useState<string>("There");
	const [content, set_content] = useState<Entry<GameDesignEntry>[]>([]);
	const [loading, set_loading] = useState<boolean>(true);

	const [hovering, set_hovering] = useState<number|null>(null);

	useEffect(() => {

		const fetchEntries = async () => {
			try {
				ContentfulClient.current = createContentfulClient();
				const response = await ContentfulClient.current.getEntries<GameDesignEntry>({
					content_type: 'gameDesign', // This should match your content type ID in Contentful
				});
	  
				set_content(response.items);
				console.log("try", response.items)
				set_loading(false);
			} catch (err) {
				set_error(err instanceof Error ? err.message : 'An error occurred while fetching entries');
				set_loading(false);
			}
		  };
	  
		  fetchEntries();




	  }, []);

	const createContentfulClient = (preview = false): ContentfulClientApi<undefined> => {
		const client = createClient({
			space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE!,
			environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
			accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESSTOKEN!,
		});
	  
		return client;
	};

return (
	<FadeInWrapper>
	<div className='w-full max-w-[90rem] mx-auto px-8 '>
		<h1 className='font-space-grotesk mx-auto w-fit my-8 mt-56 text-gd-text-primary'>{Game_Design.Title}</h1>
		<p className='font-space-grotesk mx-auto w-fit mb-56 text-gd-text-secondary'>{Game_Design.Subtitle}</p>

		<div className='space-y-8 mb-32'>
		{content.map((GameDesignObject, index)=>{
			return(
				<>
				{/* <GameDesignCompactContainer key={GameDesignObject.sys.id} game_design_item={GameDesignObject} /> */}
				<div className='flex'>
					<h2>{index+1}<span className='text-sm'>/{content.length}</span></h2>
					<div className='h-[2px] flex-grow bg-black/80 self-end -translate-y-2 ml-8'/>
				</div>
				<GameDesignLargeContainer key={GameDesignObject.sys.id + 1} game_design_item={GameDesignObject}/>
				</>
			)
		})}
		</div>

	</div>
	</FadeInWrapper>
)
}

export default GameDesign