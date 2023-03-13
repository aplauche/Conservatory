import useRoom from "../stores/useRoom"

export default function Drawer( ){

  const currentlySelected = useRoom((state) => state.currentlySelected)
  const closeRoomDrawer = useRoom((state) => state.closeRoomDrawer)

  return (
    <> 
      {currentlySelected !== null && (
        <>
        <div className="drawer">
          <div className="name">
            <h1>{currentlySelected.name}</h1>
          </div>
          <div className="image">
            
          </div>
          <div className="info">

          </div>
          <div className="cta">
            <div className="button">
              Explore
            </div>
          </div>
        </div>
        <div className="backdrop" onClick={closeRoomDrawer}></div>
        </>  
      )}
    </>
  )
}