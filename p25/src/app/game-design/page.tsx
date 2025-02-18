import Link from 'next/link'
import { Game_Design } from '../string_consts.json'
import FadeInWrapper from '../home-page-components/animation_wrappers/fade_in_wrapper'

const GameDesign = () => {
  return (
    <FadeInWrapper>
      <div className='min-h-full w-full max-w-[90rem] mx-auto'>
        <h1 className='font-space-grotesk mx-auto w-fit my-56'>{Game_Design.Title}</h1>

        <div>
          asd
        </div>

      </div>
    </FadeInWrapper>
  )
}

export default GameDesign