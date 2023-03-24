export function HeaderInfo () {
  return (
    <div className='relative'>
        <div className='relative z-10 flex flex-col justify-center max-w-5xl min-h-screen px-4 mx-auto h-screen-ios sm:px-8 md:max-w-4xl'>
          <main className='w-full mx-auto'>
            <h1 className='mt-2 bg-gradient-to-br from-white to-slate-10 bg-clip-text text-transparent text-[35px] leading-[42px] sm:text-6xl tracking-[-0.64px] sm:leading-[68px] sm:tracking-[-0.896px] font-bold mb-12 animate-delay-200 animate-duration-1000 animate-fadeIn text-center'>
              <span className='inline-block max-w-[700px] align-top'>
                Genera tus{' '}
                <span className='bg-clip-text bg-gradient-to-b from-purple-200 via-purple-400 to-purple-800'>
                  componentes
                </span>
                <br />
                con{' '}
                <span className='relative bg-clip-text bg-gradient-to-b from-purple-200 via-purple-400 to-purple-800'>
                  <Blob className='absolute right-0 bg-purple-500 -top-[200%]' />
                  Inteligencia Artificial
                </span>
              </span>
            </h1>

          </main>
        </div>
      </div>
  )
}