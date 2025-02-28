'use client'
import FadeInWrapper from '../../home-page-components/animation_wrappers/fade_in_wrapper'
import type { Entry } from 'contentful';
import { GameDesignEntry } from '../../interfaces/api_interfaces/game_design_interfaces'
import RichText from './rich_text_renderer'
import { useEffect, useState } from 'react';
import ImageCarousel from './image_carousel';

enum image_scroll_direction {
	left,
	Right
}

interface props {
	game_design_item: Entry<GameDesignEntry>
}

const GameDesignLargeContainer = ({ game_design_item }: props) => {

	const [hovering, set_hovering] = useState<boolean>(false)
	const [image_display, set_image_display] = useState<boolean>(false)
	const [images, set_images] = useState<string[]>([])

	const on_image_scroll = (direction: image_scroll_direction) => {

	}

	useEffect(()=>{
		set_images(game_design_item.fields.screenshots.map((pic) => {
			return( pic.fields.file.url )
		}))
	}, [])

return (
	<FadeInWrapper>
<div className="flex flex-col lg:flex-row lg:h-96 h-full space-y-4 lg:space-y-0 lg:space-x-4">
  {/* ----------- LARGE SCREEN LAYOUT ----------- */}
  <div className="hidden lg:flex flex-col space-y-4">
    {/* Top row: title and overview side by side */}
    <div className="h-full flex space-x-4">
      <h1 className="rounded-xl shadow-2xl bg-white p-4 h-full text-center font-space-grotesk flex items-center justify-center">
        {game_design_item.fields.title}
      </h1>
      <RichText
        className="rounded-xl shadow-2xl bg-white p-4 flex-grow"
        content={game_design_item.fields.overview}
      />
    </div>
    {/* Bottom row: status + genre chips */}
    <div className="h-fit flex space-x-4 text-xs mb-8 overflow-x-auto whitespace-nowrap rounded-xl shadow-2xl p-4 bg-white">
      <p className="bg-gd-bg-dark rounded-full text-black/80 px-4 py-0">
        {game_design_item.fields.status}
      </p>
      {Array.isArray(game_design_item?.fields?.genre) &&
        game_design_item.fields.genre.map((genre, index) => (
          <p
            key={genre}
            className="bg-gd-secondary rounded-full px-4 py-0 text-white/80"
          >
            {genre}
          </p>
        ))}
    </div>
  </div>

  {/* ----------- MEDIUM/SMALL SCREEN LAYOUT ----------- */}
  <div className="flex flex-col lg:hidden">
    {/* For md screens: flex-row, for sm: flex-col */}
    <div className="flex flex-col md:flex-row md:space-x-4">
      {/* Left column: title above chips */}
      <div className="flex flex-col space-y-4 md:w-1/3">
        <h1 className="rounded-xl shadow-2xl bg-white p-4 text-center font-space-grotesk">
          {game_design_item.fields.title}
        </h1>
        <div className="flex space-x-4 text-xs overflow-x-auto whitespace-nowrap rounded-xl shadow-2xl p-4 bg-white">
          <p className="bg-gd-bg-dark rounded-full text-black/80 px-4 py-0">
            {game_design_item.fields.status}
          </p>
          {Array.isArray(game_design_item?.fields?.genre) &&
            game_design_item.fields.genre.map((genre, index) => (
              <p
                key={index}
                className="bg-gd-secondary rounded-full px-4 py-0 text-white/80"
              >
                {genre}
              </p>
            ))}
        </div>
      </div>
      {/* Right column: overview */}
      <div className="md:w-2/3 mt-4 md:mt-0">
        <RichText
          className="rounded-xl shadow-2xl bg-white p-4 h-full min-h-40"
          content={game_design_item.fields.overview}
        />
      </div>
    </div>
  </div>

  {/* ----------- IMAGES CAROUSEL ----------- */}
  <div className="rounded-xl shadow-2xl w-full">
    {Array.isArray(game_design_item?.fields?.screenshots) &&
    game_design_item.fields.screenshots.length > 0 ? (
      <ImageCarousel
        images={game_design_item.fields.screenshots.map(
          (screenshot) => screenshot.fields?.file?.url || ""
        )}
      />
    ) : (
      <div className="w-full h-72 bg-slate-100 rounded-lg flex items-center justify-center">
        No screenshots available
      </div>
    )}
  </div>

  <div>
    <button>asd</button>
  </div>
</div>

	</FadeInWrapper>
)
}

export default GameDesignLargeContainer