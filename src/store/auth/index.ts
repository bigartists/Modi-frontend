import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
  user: null | Record<string, any>
}

type Actions = {
  updateUser: (user: State['user']) => void
}

const useStore = create<State & Actions>()(
  devtools(set => ({
    user: null,
    updateUser: user => set({ user }),
  })),
)

export default useStore
