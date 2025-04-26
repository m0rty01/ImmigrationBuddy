import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-md mb-8">
          We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Return to Home
          </Link>
          <div className="mt-4">
            <Link
              href="/faq"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View FAQs
            </Link>
            <span className="mx-2 text-gray-400">•</span>
            <Link
              href="/contact"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 