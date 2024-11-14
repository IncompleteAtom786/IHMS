
const Home = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/2 text-5xl flex items-center justify-center h-screen">
        <div className="w-fit h-fit">
          <div className="font-bold">
            <h1>Welcome to</h1>
            <h1 className="text-blue-500">IHMS</h1>
          </div>
          <h1>All in one healthcare system</h1>
          <h1>solutions.</h1>
        </div>
      </div>
      <div className="w-1/2 p-5 flex justify-center items-center">
        <img src="./hero-image.jpg" alt="Hero Image" className="rounded-2xl"/>
      </div>
    </div>
  )
}

export default Home

