export default function Testimonials() {
  const testimonials = [
    {
      content: "ImmigrationBuddy simplified the complicated H-1B process for me. The personalized guidance helped me understand my options clearly.",
      author: "Raj Patel",
      role: "Software Engineer from India"
    },
    {
      content: "I was overwhelmed by the different pathways until I used this platform. Now I have a clear plan for my family-based immigration process.",
      author: "Maria Rodriguez",
      role: "Teacher from Colombia"
    },
    {
      content: "The immediate feedback on my eligibility for different visa types saved me months of research and uncertainty.",
      author: "Li Wei",
      role: "Researcher from China"
    },
    {
      content: "As an international student looking to work in the US after graduation, ImmigrationBuddy laid out exactly what I needed to do for OPT and beyond.",
      author: "Oluwaseun Adeyemi",
      role: "Graduate Student from Nigeria"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Hear from people who have successfully navigated their immigration journey with us
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-full flex flex-col">
                <div className="flex-grow">
                  <svg className="h-8 w-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#get-started" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Start Your Immigration Journey
          </a>
        </div>
      </div>
    </section>
  );
} 