import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-base font-semibold text-gray-100">About Us</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-100">Resources</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="https://www.uscis.gov" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white">
                  USCIS Official Site
                </a>
              </li>
              <li>
                <a href="https://travel.state.gov" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white">
                  U.S. Department of State
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-100">Connect With Us</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-100">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-300">
              Get the latest immigration updates and resources.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-blue-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} ImmigrationBuddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 