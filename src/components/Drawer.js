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
            <img src={window.location.origin + currentlySelected.photo} />
          </div>
          <div className="info">
            {currentlySelected.description}
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