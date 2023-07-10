import { useEffect, useState } from "react"
import { HiChevronRight } from "react-icons/hi";
import useRoom from "../stores/useRoom"

export default function Drawer( ){

  const currentlySelected = useRoom((state) => state.currentlySelected)
  const closeRoomDrawer = useRoom((state) => state.closeRoomDrawer)

  // use an additional layer to store the last selected room in order to not have flash of no data
  const [cachedSelected, setCachedSelected] = useState(null);

  useEffect(() => {
    if(currentlySelected != null){
      setCachedSelected({...currentlySelected})
    }
  }, [currentlySelected])

  return (
    <> 

        <div className={`drawer ${currentlySelected !== null && "drawer-open"}`}>
          <div className="drawer-inner">
            <div className="name py-4 my-4 flex items-center">
              <img className="w-[60px] h-[60px] object-contain" src="/images/gc-logo.svg" alt="" />

              <h1 className="ml-4 text-2xl lg:text-4xl font-bold mt-2">{cachedSelected?.name}</h1>
            </div>
            {cachedSelected?.photo && (
              <a href={`/room/${currentlySelected?.slug}`} className="image block">
                <img src={window.location.origin + cachedSelected?.photo} />
                <div className="image-overlay-button absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-black bg-opacity-50 border border-white rounded-full"><HiChevronRight className="text-7xl text-white" /></div>
              </a>
            )}
            <div dangerouslySetInnerHTML={{__html:cachedSelected?.description }}  className="info py-8">
            </div>
            {cachedSelected?.stats && (
                <h3 className=" text-md lg:text-xl font-bold mb-3">Quick Facts:</h3>
              )}
            <div className="grid grid-cols-2 gap-2 mb-6">

              {cachedSelected?.stats && cachedSelected?.stats.map(stat => (
                <div key={stat.title} className="border border-light px-4 py-8 text-center">
                  <p className="mb-2 text-light-green">{stat.title}</p>
                  <div className="text-medium-text  font-bold text-2xl lg:text-4xl">
                    {stat.stat}
                  </div>
                </div>
              ))}
            </div>
            {cachedSelected?.pano && (
              <div className="cta">
                <a href={`/room/${currentlySelected?.slug}`} className="button btn-primary w-full my-4">
                  Explore
                </a>
              </div>
            )}
            {cachedSelected?.slug == 'info' && (
              <div className="cta">
                <a target="_blank" href={"https://garfieldconservatory.org/visit/"} className="button btn-primary w-full my-4">
                  Plan a visit
                </a>
              </div>
            )}
          </div>
        </div>
        {currentlySelected !== null && (          
          <div className="backdrop" onClick={closeRoomDrawer}></div>
        )}

    </>
  )
}