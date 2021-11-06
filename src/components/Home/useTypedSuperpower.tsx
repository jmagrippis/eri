import { useEffect, useState } from 'react'

export enum TypePhase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL_MIN = 80
const TYPING_INTERVAL_MAX = 150
const TYPING_PAUSE_MS = 2000
const DELETING_INTERVAL = 50
const DELETING_PAUSE_MS = 500

const getRandomTypingInterval = () =>
  Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) +
  TYPING_INTERVAL_MIN

export const useTypedSuperpower = (
  superpowers: string[]
): {
  typedSuperpower: string
  selectedSuperpower: string
  phase: TypePhase
} => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [phase, setPhase] = useState(TypePhase.Typing)
  const [typedSuperpower, setTypedSuperpower] = useState('')
  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const nextTypedSuperPower = superpowers[selectedIndex].slice(
          0,
          typedSuperpower.length + 1
        )

        if (nextTypedSuperPower === typedSuperpower) {
          setPhase(TypePhase.Pausing)
          return
        }

        const timeout = setTimeout(() => {
          setTypedSuperpower(nextTypedSuperPower)
        }, getRandomTypingInterval())

        return () => clearTimeout(timeout)
      }
      case TypePhase.Deleting: {
        if (!typedSuperpower) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1
            setSelectedIndex(superpowers[nextIndex] ? nextIndex : 0)
            setPhase(TypePhase.Typing)
          }, DELETING_PAUSE_MS)
          return () => clearTimeout(timeout)
        }

        const nextRemaining = superpowers[selectedIndex].slice(
          0,
          typedSuperpower.length - 1
        )

        const timeout = setTimeout(() => {
          setTypedSuperpower(nextRemaining)
        }, DELETING_INTERVAL)

        return () => clearTimeout(timeout)
      }
      case TypePhase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting)
        }, TYPING_PAUSE_MS)

        return () => clearTimeout(timeout)
    }
  }, [superpowers, typedSuperpower, selectedIndex, phase])

  return {
    typedSuperpower,
    phase,
    selectedSuperpower: superpowers[selectedIndex],
  }
}
