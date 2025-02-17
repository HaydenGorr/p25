import Link from 'next/link'
import { Game_Design } from '../string_consts.json'
import AnimationWrapper from '../home-page-components/animation_wrapper'

const GameDesign = () => {
  return (
    <AnimationWrapper>
      <div className='min-h-full w-full max-w-[90rem] px-8'>
        <h1 className='font-space-grotesk mx-auto w-fit my-56'>{Game_Design.Title}</h1>

        <div>
          asd
        </div>
      </div>
    </AnimationWrapper>
  )
}

export default GameDesign