'use client'

import { createContext, useContext } from 'react'

export const ActiveSectionContext = createContext<(id: string) => void>(() => {})

export function useSetActiveSection() {
  return useContext(ActiveSectionContext)
}
