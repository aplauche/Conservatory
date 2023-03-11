import { create } from 'zustand'


export default create((set) => ({
  currentlySelected: null,
  handleRoomSelect: (val) => set((state) => ({ currentlySelected: val })),
  closeRoomDrawer: () => set((state) => ({ currentlySelected: null }))
}))

