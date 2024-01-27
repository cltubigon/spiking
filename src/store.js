import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

const immerPersist = (config) =>
  persist(
    immer(config),
    {
      name: "mystore", // The name of the store
    }
  )

const utilityStore = create(
  immerPersist((set, get) => ({
    schools: {
      grade: {
        section: {
          count: 0,
        },
      },
    },
    increment: (value) =>
      set((state) => {
        const currentCount = get().schools.grade.section.count
        state.schools.grade.section.count = currentCount + value
      }),
    decrement: () =>
      set((state) => {
        const currentCount = get().schools.grade.section.count
        state.schools.grade.section.count = currentCount - 1
      }),
  }))
)

export default utilityStore
