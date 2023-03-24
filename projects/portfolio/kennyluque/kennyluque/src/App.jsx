

function App() {
  return (
    <div className="bg-black w-screen h-screen relative">
      <div className="relative z-10 flex flex-col justify-center 
        max-w-7xl min-h-screen px-4 mx-auto h-screen-ios sm:px-8 ">
        <main className="w-full mx-auto">
          
          <h1 className="p-5 flex flex-col  font-extrabold tracking-wider text-5xl leading-none 
            bg-gradient-to-br from-white to-slate-10 bg-clip-text text-transparent 
            sm:text-[100px] sm:leading-[100px] sm:tracking-[-.06em]
            text-center">
            
            <span className="flex bg-clip-text animate-[transition_9s_ease-in-out_infinite] 
              bg-gradient-to-br from-white to-slate-10 text-transparent 
              sm:justify-start pb-5
              justify-center
              ">
              Kenny Luque
            </span>
            
            <span className="bg-clip-text text-center pb-5 animate-[transition_9s_ease-in-out_infinite] delay-300
              bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900
            ">  
              Software Engineer
            </span>

            <span className="bg-clip-text animate-[transition_9s_ease-in-out_infinite] delay-[900]
              flex pb-5 pr-1 justify-center sm:justify-end
              bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800
            ">
              Expert
            </span>
          </h1>
        </main>
      </div>


        {/* <Header />  */}
        {/* <HeaderInfo /> */}

    </div>
  )
}

export default App
