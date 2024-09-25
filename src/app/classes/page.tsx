import Image from 'next/image'
import ClassesTable from '@/components/ClassesTable'

export default function Classes() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="mb-4">
            Our classes are designed to be interactive and fun. We use a variety of methods to help you learn Spanish quickly and effectively.
          </p>
          <p>
            Whether you're a beginner or looking to improve your existing skills, we have a class that's right for you.
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
