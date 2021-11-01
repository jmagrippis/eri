import { TypePhase, useTypedSuperpower } from './useTypedSuperpower'
import cn from 'classnames'

type Props = {
  superpowers: string[]
}

export const Superpowers = ({ superpowers }: Props) => {
  const { typedSuperpower, selectedSuperpower, phase } =
    useTypedSuperpower(superpowers)

  return (
    <h2 className="flex flex-col lg:block text-center pt-12 text-5xl tracking-tight text-gray-900 md:text-6xl">
      <span className="mb-2 lg:mb-0">My superpower?</span>{' '}
      <span
        className={cn('text-primary-400 pt-4 pb-12 min-h-[10rem]', {
          ['end-cursor']: phase !== TypePhase.Deleting,
          ['blinking']: phase === TypePhase.Pausing,
        })}
        aria-label={selectedSuperpower}
      >
        {typedSuperpower}
      </span>
    </h2>
  )
}
