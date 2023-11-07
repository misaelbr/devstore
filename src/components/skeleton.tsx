import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
// import {  } from 'tailwind-m'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'animate-pulse rounded-md bg-zinc-50/10 duration-100',
        className,
      )}
      {...props}
    />
  )
}
