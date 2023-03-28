

function App() {
  return (
    <div className="bg-[#202124] w-screen h-screen relative">

      <div className="relative z-10 flex flex-col justify-center 
        max-w-7xl min-h-screen px-4 mx-auto h-screen-ios sm:px-8 ">

        <main className="w-full mx-auto">
          
          <h1 className="text-5xl md:text-9xl p-5
          font-bold flex flex-col items-center animate-gradient"
          style={{
            background:
              "-webkit-linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5, #23d5ab)",
            backgroundSize: "250%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          >
            Kenny Luque
          </h1>

          <h2 className="text-5xl mt-10 md:text-7xl p-5 font-bold
          flex flex-col items-center animate-gradient"
          style={{
            background:
              "-webkit-linear-gradient(0deg,#ffffff,#ffffff,#ff4d4d,#f9cb28)",
            backgroundSize: "230%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>  
            Software Engineer
          </h2>

        </main>

        <section className="flex flex-row justify-center mt-60">
          <div className="flex font-bold text-xl gap-12 p-4">
            <button className="border-white border rounded-md p-4
            bg-white hover:bg-[#202124] hover:border-white
            text-black hover:text-white
            ">
              <a href="#contactame" 
              className=""
              >
                Contact
              </a>
            </button>
            <button className="border-b-2 p-4 
            text-white hover:border-white hover:border ">
              <a
                href="https://doc-0c-3o-docs.googleusercontent.com/docs/securesc/u6je38vl9pooc58eg44nsm06ui0ef3as/6af8ojq819nrtf3c6uk7fu4dn63r18ge/1679803950000/04116105683629412373/04116105683629412373/1L9MyYWmEhrEHeYfBnxbLsi4D30L07knt?e=download&ax=ALy03A7c01lTSRukah3wNwLnkZdiCqiNtz7CN65fySD64TV8K5a5Wp1rtoFAv6HgPqgflDbFEaWB1D3dZjzETEkPKsxUAxLUMqCvNyvWBHks0HjmpzMtYj2huZ2cPGIepM99kvcQ7kA57YQaNDZBVKE44dPNV6qOQIzR90acAqNALbK-kGGiU4lJkJ7rQ43l1zzmOqymWsfH_hLxpRFm8n97j-6uJP8UaQjmvq3a7wnS33JRX4IBpY8ASEBhFFuGRCmE8yCfZSKDH7sAMU6-1v_UBg-VGmggqSSg8ePNBWkDo5PM2gw6icxFIQMOCyZaShmyDJ3xRkxAXpINFI60HsEOodyXMYj9iJpUkRqSZfyqHEb7cp3rW2JmGpBeGHtQGmiCQovKFMOvngce3BqtaXRZrlT5JB6om6b8YS0Zhkkk5Zf4JfqKk53sLg1qFh4H-c0T1_NyYogGAQaVY6EurCFF2EMuB4Viugz2bDx0lGNBgSLC-tRlJUcBpJjjwqOTmmoozvfk9QgLwuuoVemTBKdu63g40gqQkxKqaN1xshGzfjJPibDIQ97OYFgjT4krmJ6FS_nXGFJrkaF0NcH0Hw2G1Wi9iKnvoDga6PZ7cBT3NftNHB0D4vAjifX_c3_PR3od9NSgxmX6gnxrKnG2N4R-UoXPOe0DrRhFIrSBOQ6H5Xqu9FfKx738IhQ4YTpLdoAnkKF_OfI5gaztSKccqUva2gSrl8CMwGFxdS1ra29P1lYmKt94FmnQL0GzUvC70cipJIn8C7OqLagDUDbFIkr9H6xBt3udv2z-AMWyFTOx_MU1Dk-GQfCSr0Owmzkd0prQV2qSRxNjHSLHDWjdfoBbHOejs1t7NMCC-ekyBxzexMK2dgrjeEU0IuqA4KfUgrLmKJyNlzrmHWw3pfot4o7aLkBIxo9vbesqULm5&uuid=2692b2f7-28c4-40a9-9ce2-12a7032be527&authuser=0"
                className=""
                target="_blank"
                rel="noreferrer"
                >
                Download CV
              </a>
            </button>
          </div>
        </section>
      </div>

      

        {/* <Header />  */}
        {/* <HeaderInfo /> */}

    </div>
  )
}

export default App
