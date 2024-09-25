import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/images/teacher1.jpg"
            alt="Teacher 1"
            width={200}
            height={200}
            className="rounded-full mb-4 md:mb-0 md:mr-4"
          />
          <p className="text-center md:text-left">
            María has been teaching Spanish for over 10 years. She loves to incorporate music and games into her lessons to make learning fun and engaging.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <Image
            src="/images/teacher2.jpg"
            alt="Teacher 2"
            width={200}
            height={200}
            className="rounded-full mb-4 md:mb-0 md:ml-4"
          />
          <p className="text-center md:text-right">
            Carlos is a native Spanish speaker with a passion for literature. He enjoys using short stories and poems to help students improve their language skills.
          </p>
        </div>
      </div>
    </div>
  )
}
