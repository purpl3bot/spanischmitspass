import Image from 'next/image'
import ClassesTable from '@/components/ClassesTable'

export default function Classes() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-hand font-bold mb-8 text-center">Our Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="mb-4">
            H O W W E T E A C H
Our methodology is based on the communicative approach, which means that you will
learn to use grammatical and lexical structures in practical, real-life situations. The
aim is to make you feel comfortable and confident. In addition, in each class you will
have one of us as your teacher, as we alternate sessions to offer you different teaching
styles. This will help you gain a broader exposure to different accents, educational
resources, perspectives and ways of approaching the language.
          </p>
          <p>
           O U R C L A S S E S
We offer classes for beginners (A1-A2), intermediates (B1-B2), and advanced
learners (C1-C2).
Individual classes, small group classes, face-to-face and online classes.
Conversation classes.
Special classes for travelers (learn everything you need to handle yourself on a
trip in Spanish and be an independent traveler!)
Flexible schedules according to your availability.
All materials included.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/classroom.jpg"
            alt="Classroom"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
      <ClassesTable />
    </div>
  )
}
