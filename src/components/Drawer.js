import useRoom from "../stores/useRoom"

export default function Drawer( ){

  const currentlySelected = useRoom((state) => state.currentlySelected)
  const closeRoomDrawer = useRoom((state) => state.closeRoomDrawer)

  return (
    <> 
      {currentlySelected !== null && (
        <>
        <div className="drawer">
          {currentlySelected.name}
        </div>
        <div className="backdrop" onClick={closeRoomDrawer}></div>
        </>  
      )}
    </>
  )
}