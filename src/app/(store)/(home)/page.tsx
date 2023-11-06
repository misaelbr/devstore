import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[920px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
          src="/moletom-ai-side.png"
          width={920}
          height={920}
          quality={90}
          alt="moletom"
        />
      </Link>
      <Link
        href="/"
        className="group col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
          src="/camiseta-dowhile-2022.png"
          width={920}
          height={920}
          quality={90}
          alt="moletom"
        />
      </Link>
      <Link
        href="/"
        className="group col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
          src="/moletom-ai-side.png"
          width={920}
          height={920}
          quality={90}
          alt="moletom"
        />
      </Link>
    </div>
  )
}
