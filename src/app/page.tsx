import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import ImmigrationForm from "../components/ImmigrationForm";

export default function Home() {
  return (
    <>
      <Hero />
      
      <HowItWorks />
      
      <section id="get-started" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get Your Immigration Options
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Answer a few simple questions to receive personalized immigration guidance
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ImmigrationForm />
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section className="bg-blue-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to simplify your immigration journey?
          </h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Join thousands of people who have found their path to the United States with ImmigrationBuddy.
          </p>
          <div className="mt-8">
            <a
              href="#get-started"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
