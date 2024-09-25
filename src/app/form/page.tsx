export default function Form() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Start Your Classes</h1>
      <div className="max-w-md mx-auto">
        <p className="mb-4">
          Ready to start learning Spanish? Fill out our form to get started!
        </p>
        <a
          href="https://forms.google.com/your-form-url"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Go to Registration Form
        </a>
      </div>
    </div>
  )
}
