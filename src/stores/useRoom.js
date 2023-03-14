import { create } from 'zustand'
import roomsData from './roomsData'

export default create((set) => ({
  rooms: roomsData,
  currentlySelected: null,
  panoScene: false,
  handleRoomSelect: (val) => set((state) => ({ currentlySelected: roomsData[val] })),
  closeRoomDrawer: () => set((state) => ({ currentlySelected: null })),
  loadPanoScene: (val) => set(state => ({panoScene: val, currentlySelected: null })),
  exitPanoScene: () => set(state => ({panoScene: false}))
}))

