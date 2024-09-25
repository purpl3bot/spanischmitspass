import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-120 h-120 relative mb-8">
        <Image
          src="/disenio.jpg"
          alt="Animated GIF"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-center text-lg max-w-md">
        Welcome to Spanisch mit Spass! Learn Spanish in a fun and engaging way with our experienced teachers in Berlin.
      </p>
    </div>
  )
}
