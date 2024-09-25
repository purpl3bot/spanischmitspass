import Image from 'next/image'

const decorations = [
  { src: '/images/decoration1.png', width: 50, height: 50, alt: 'Decoration 1' },
  { src: '/images/decoration2.png', width: 60, height: 60, alt: 'Decoration 2' },
  { src: '/images/decoration3.png', width: 40, height: 40, alt: 'Decoration 3' },
  // Add more decorations as needed
]

export default function Decorations() {
  return (
    <>
      {decorations.map((decoration, index) => (
        <Image
          key={index}
          src={decoration.src}
          width={decoration.width}
          height={decoration.height}
          alt={decoration.alt}
          className={`absolute ${getRandomPosition()}`}
        />
      ))}
    </>
  )
}

function getRandomPosition() {
  const positions = [
    'top-0 left-0',
    'top-0 right-0',
    'bottom-0 left-0',
    'bottom-0 right-0',
    'top-1/4 left-0',
    'top-1/4 right-0',
    'bottom-1/4 left-0',
    'bottom-1/4 right-0',
  ]
  return positions[Math.floor(Math.random() * positions.length)]
}
