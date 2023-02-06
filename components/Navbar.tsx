// import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className="bg-[#338957]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns=""
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns=""
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <p className="text-white text-center mt-4 font-bold">
                Shutter NFT
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="hidden sm:block sm:ml-6 mt-4 ">
              <div className="flex space-x-4">
                <Link className={styles.active} href="/mintNFT">
                  <a className="text-gray-200 hover:bg-green-300 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                    Mint NFT
                  </a>
                </Link>
                <Link className={styles.active} href="/videoPlayer">
                  <a className="text-gray-200 hover:bg-green-300 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                    Video Player
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link className={styles.active} href="/mintNFT">
            <a className="bg-green-300 text-white block px-3 py-2 rounded-md text-base font-medium">
              Mint NFT
            </a>
          </Link>
          <Link className={styles.active} href="/videoPlayer">
            <a className="bg-green-300 text-white block px-3 py-2 rounded-md text-base font-medium">
              View Video
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
