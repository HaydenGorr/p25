import Link from 'next/link'

const HomePage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-56 px-4 text-black/90 h-96 flex justify-center">
      {/** The translate is a hack to get it centred. Figure out a proper solution later */}
        <div className="max-w-4xl flex flex-col -translate-y-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Creative Portfolios
          </h1>
          <p className="text-sm mb-8 text-black/50">
            Game Writing • Game Design • Engineering • Creative Writing
          </p>
        </div>
      </section>

      <section className='w-full py-8 bg-home_page-bg-dark'>
        <div className='mx-auto w-full max-w-4xl'>
          <p className='text-black font-bold text-xl w-fit mx-auto mb-8'>Talk to my work?</p>
          <p className='text-black/80 '>I've bestowed the great curse of life into the inanimate matter that is my work.</p>
          <button className='bg-purple-200 w-fit text-purple-900 px-4 py-2 rounded-lg mt-4'>try it out</button>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="max-w-4xl mx-auto py-16 px-4 w-full">
        <h1 className='text-black text-3xl font-bold mx-auto w-fit mb-8'>Some of my work</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Game Writing Section */}
          <Link href="/game-writing" 
                className="group p-8 rounded-lg bg-gw-bg-light hover:bg-gw-bg-medium transition-colors duration-300 shadow-md">
                  <div className='h-52 bg-yellow-400/30 rounded-lg mb-8'></div>
            <h2 className="text-2xl font-bold text-gw-text-primary mb-4">
              Game Writing
            </h2>
            <p className="text-gw-text-secondary mb-4">
              Narrative design, dialogue systems, and story development for games.
            </p>
            <span className="text-gw-primary group-hover:translate-x-1 inline-block transition-transform duration-300">
              View Projects →
            </span>
          </Link>

          {/* Game Design Section */}
          <Link href="/game-design"
                className="group p-8 rounded-lg bg-gd-bg-light hover:bg-gd-bg-medium transition-colors duration-300 shadow-md">
            <h2 className="text-2xl font-bold text-gd-text-primary mb-4">
              Game Design
            </h2>
            <p className="text-gd-text-secondary mb-4">
              Game mechanics, systems design, and interactive experiences.
            </p>
            <span className="text-gd-primary group-hover:translate-x-1 inline-block transition-transform duration-300">
              View Projects →
            </span>
          </Link>

          {/* Engineering Section */}
          <Link href="/engineering"
                className="group p-8 rounded-lg bg-eng-bg-light hover:bg-eng-bg-medium transition-colors duration-300 shadow-md">
            <h2 className="text-2xl font-bold text-eng-text-primary mb-4">
              Engineering
            </h2>
            <p className="text-eng-text-secondary mb-4">
              Software development projects and technical solutions.
            </p>
            <span className="text-eng-primary group-hover:translate-x-1 inline-block transition-transform duration-300">
              View Projects →
            </span>
          </Link>

          {/* Creative Writing Section */}
          <Link href="/creative-writing"
                className="group p-8 rounded-lg bg-cw-bg-light hover:bg-cw-bg-medium transition-colors duration-300 shadow-md">
            <h2 className="text-2xl font-bold text-cw-text-primary mb-4">
              Creative Writing
            </h2>
            <p className="text-cw-text-secondary mb-4">
              Short stories, narrative essays, and creative explorations.
            </p>
            <span className="text-cw-primary group-hover:translate-x-1 inline-block transition-transform duration-300">
              View Projects →
            </span>
          </Link>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
    </main>
  )
}

export default HomePage