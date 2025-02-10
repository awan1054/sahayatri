// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div>
//      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500  dark:bg-slate-900 dark:text-white">
//   <nav className="grid grid-flow-col gap-4">
//     <Link to='/about'className="link link-hover">About us</Link>
//     <Link to='/contact' className="link link-hover">Contact</Link>
//     {/* <a className="link link-hover">Jobs</a>
//     <a className="link link-hover">Press kit</a> */}
//   </nav>
//   <nav>
//     <div className="grid grid-flow-col gap-4">
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current">
//           <path
//             d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//         </svg>
//       </a>
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current">
//           <path
//             d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//         </svg>
//       </a>
//       <a>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           className="fill-current">
//           <path
//             d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//         </svg>
//       </a>
//     </div>
//   </nav>
//   <aside> <p>Copyright © {new Date().getFullYear()} - All right reserved by Bike Rental System</p>
   
//   </aside>
// </footer>
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className={`footer footer-center text-base-content rounded p-10 
        ${localStorage.getItem('theme') === "light" ? 'bg-blue-100 text-gray-800' : 'dark:bg-slate-700 dark:text-white'}`}
      >
        <nav className="grid grid-flow-col gap-4">
          <Link to='/about' className="link link-hover">About us</Link>
          <Link to='/contact' className="link link-hover">Contact</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="https://wa.me/9779805389497" target="_blank" rel="noopener noreferrer">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current">
    <path
      d="M12.02 2C6.48 2 2 6.48 2 12c0 2.19.64 4.23 1.85 6l-1.25 4.56 4.68-1.23C9.07 22 10.51 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12.02 2zm0 18c-1.27 0-2.5-.24-3.67-.71l-.26-.11-2.77.73.75-2.63-.16-.27C4.63 14.94 4 13.52 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.51-5.77c-.25-.13-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.13-.17.25-.65.8-.8.97-.15.16-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.65-1.24-1.46-1.38-1.71s-.01-.38.11-.5c.11-.1.25-.3.38-.46.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.48s-.56-1.33-.77-1.83c-.2-.49-.41-.42-.56-.42-.15 0-.3-.01-.46-.01-.16 0-.42.06-.65.3-.22.24-.86.84-.86 2.06s.89 2.4 1.02 2.57c.13.16 1.75 2.67 4.24 3.75.59.26 1.06.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.18-.06-.09-.22-.15-.47-.28z"/>
  </svg>
</a>


          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by Bike Rental System</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
