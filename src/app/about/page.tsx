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
            Ludmila is a certified spanish teacher known for her
engaging and humorous approach to language
instruction. Beyond the classroom, she is a prolific
artist with a passion for photography, design, and
cinema. She likes making the learning experience as
enjoyable and ludic as possible. With her expertise
in language education, she offers students a rich,
multifaceted perspective that extends beyond
traditional learning.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <p className="text-center md:text-left">
            Lucía is a multifaceted educator and licensed
psychologist with a deep passion for language and
literature. With an also path for creative writing
master degree in Sevilla and an extensive experience
in poetry writing workshops. Involved in literature,
bringing a creative and holistic approach to
teaching, inspiring a dynamic learning.
          </p>
          <Image
            src="/fotolp2.jpg"
            alt="Teacher 2"
            width={200}
            height={200}
            className="rounded-full mb-4 md:mb-0 md:mr-8"
          />
        </div>
      </div>
    </div>
  )
}
