import { create } from 'zustand'
import roomsData from './roomsData'

export default create((set) => ({
  rooms: roomsData,
  currentlySelected: null,
  handleRoomSelect: (val) => set((state) => ({ currentlySelected: roomsData[val] })),
  closeRoomDrawer: () => set((state) => ({ currentlySelected: null }))
}))

