import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-hand font-bold mb-8 text-center">About Us</h1>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/fotolud2.jpg"
            alt="Teacher 1"
            width={200}
            height={200}
            className="rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <p className="text-center md:text-left">
            María has been teaching Spanish for over 10 years. She loves to incorporate music and games into her lessons to make learning fun and engaging.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/fotolp2.jpg"
            alt="Teacher 2"
            width={200}
            height={200}
            className="rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <p className="text-center md:text-left">
            Carlos is a native Spanish speaker with a passion for literature. He enjoys using short stories and poems to help students improve their language skills.
          </p>
        </div>
      </div>
    </div>
  )
}
