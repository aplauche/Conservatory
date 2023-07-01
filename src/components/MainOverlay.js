

export default function MainOverlay(){


  return (
    <>
    <header className="site-header">
      <div className="header-container text-medium-text ">
        <div>
          <div className="mt-8 mx-auto lg:mx-0 w-[60px] lg:w-[90px]">
            <img src="/images/gc-logo.svg" alt="" />
          </div>
          <div className="header-intro pt-3 lg:pt-12">
            <span className="bg-light-green hidden rounded-full px-4 py-2 text-white lg:inline-block mb-12">Garfield Park Conservatory</span>
            <p className="text-center lg:text-left text-3xl mb-0 font-bold text-black">Explore the</p>
            <h1 className="text-center lg:text-left text-6xl font-bold mb-6 lg:mb-12 text-black">Conservatory.</h1>
            <p className="hidden lg:block mb-6">
            The Garfield Park Conservatory in Chicago, Illinois is one of the largest and most stunning conservatories in the nation. 
            </p>
            <p className="hidden lg:block" >Often referred to as “landscape art under glass,” the Garfield Park Conservatory occupies two acres of public greenhouse space and 10 acres of outdoor gardens. </p>
          </div>
        </div>
        {/* <a href="https://garfieldconservatory.org/" target="_blank" className="btn-primary mt-12">Visit Main Site</a> */}
      </div>
    </header> 
    </>
  )
}