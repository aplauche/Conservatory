

export default function MainOverlay(){


  return (
    <>
    <header className="site-header">
      <div className="header-container text-medium-text flex flex-col justify-between">
        <div>
          <div className="mt-8 w-[90px]">
            <img src="/images/gc-logo.svg" alt="" />
          </div>
          <div className="header-intro pt-12">
            <span className="bg-light-green rounded-full px-4 py-2 text-white inline-block mb-12">The Virtual Conservatory</span>
            <p className="text-3xl mb-0 font-bold text-black">Explore the</p>
            <h1 className="text-6xl font-bold mb-12 text-black">Conservatory.</h1>
            <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra lorem a lacus porta suscipit. Morbi dolor dolor, lobortis vel urna vel, semper mollis est. Nam dictum vel quam vel convallis. Pellentesque eu metus tincidunt, condimentum velit at, efficitur mauris. Morbi lectus nulla, efficitur a mattis at, vulputate ut est.            </p>
          </div>
        </div>
        <p className="font-bold text-sm text-light-text mb-3">Built with React Three Fiber</p>
        {/* <a href="https://garfieldconservatory.org/" target="_blank" className="btn-primary mt-12">Visit Main Site</a> */}
      </div>
    </header>
    
    </>
  )
}