// export default function FooterPane() {
//   return (
//     <footer className="bg-gray-800 text-white py-15 h-40">
//       <div className="text-center text-sm">
//         <p className="text-sm">&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
//         <div className="space-x-4 mt-4 md:mt-0">
//           <a href="#" className="hover:underline">Privacy</a>
//           <a href="#" className="hover:underline">Terms</a>
//           <a href="#" className="hover:underline">Contact</a>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Image from 'next/image'

export default function FooterPane() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      {/* <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center"> */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-8">

          {/* Logo Section */}
          {/* Tailwind applies classes left to right */}
          {/* wrong: md:mt-4 sm:mt-8	 */}
          {/* right: mt-8 sm:mt-4 --> screen smaller, take up smaller margin */}

          <div className="text-center md:text-right order-3 md:order-1">
            <Image
              src="/assets/logo.png"
              alt="Vue logo"
              className="w-24 mb-4 md:mt-4 sm:mt-8 mx-auto md:mx-0"
              width={50}
              height={50}
            />

          </div>

          {/* Documentation Links */}
          <div className="text-left order-1 md:order-2">
            <h5 className="text-purple-400 font-semibold mb-2">Documentation</h5>
            <ul className="list-none space-y-1 ml-3">
              <li><a href="/home" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/booking" className="hover:underline">Booking</a></li>
              <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
            </ul>
          </div>

          {/* Our Site Links */}
          <div className="text-left order-2 md:order-3">
            <h5 className="text-purple-400 font-semibold mb-2">Our Site</h5>
            <ul className="list-none space-y-1 ml-3">
              <li>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Google.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />
        {/* Optional footer note */}
        {/* <p className="text-sm text-center text-gray-500">Designed and built by cyy.</p> */}
      </div>
    </footer>
  );
}