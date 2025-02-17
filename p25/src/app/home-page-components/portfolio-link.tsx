import Link from 'next/link'

interface props {
    className?: string
    img: string
    title: string
    subtitle: string,
    href: string
}

const PortfolioLink = ({ className, img, title, subtitle, href }: props) => {
  return (
    <Link href={href} 
        className={`${className} group pb-8 rounded-lg bg-gw-bg-light hover:bg-gw-bg-medium transition-colors duration-300 shadow-md`}>
        <img src={img} className='h-60 w-full object-cover rounded-t-xl'/>
        <h2 className="text-2xl font-bold text-gw-text-primary mb-4 pt-8 px-8 ">
            {title}
        </h2>
        <p className="text-gw-text-secondary mb-4 px-8 ">
            {subtitle}
        </p>
        <span className="text-gw-primary group-hover:translate-x-1 inline-block transition-transform duration-300  px-8 ">
            View Projects →
        </span>
    </Link>
  )
}

export default PortfolioLink