// import React from "react";
// import logo1 from "../assets/logo.png";

// const Footer = () => {
//   return (
//     <footer className="bg-warning text-black py-3">
//       <div className="container">
//         <div className="row">
//           {/* Intro Section */}
//           <div className="col-lg-4 col-md-6 mb-4">
//             <h5 className="text-black fw-bold d-flex align-items-center">
//               <img
//                 style={{ width: "50px", height: "50px", marginRight: "10px" }}
//                 src={logo1}
//                 alt="Logo"
//               />
//               <i>Style Loft</i>
//             </h5>
//             <p>
//               At Style Loft Boutique, every piece tells a story of timeless style and modern sophistication,
//               designed to celebrate your unique essence.Style Loft Boutique curates more than just fashion
//               we create a canvas of elegance, individuality, and confidence, one outfit at a time.
//             </p>
//           </div>

//           {/* Guides Section */}
//           <div className="col-lg-4 col-md-6 mb-4">
//             <h5 className="text-black fw-bold">Guides</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <a
//                   style={{ textDecoration: "none", color: "black" }}
//                   target="blank"
//                   href=""
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   style={{ textDecoration: "none", color: "black" }}
//                   target="blank"
//                   href=""
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   style={{ textDecoration: "none", color: "black" }}
//                   target="blank"
//                   href=""
//                 >
//                   Menu
//                 </a>
//               </li>
//               <li>
//                 <a
//                   style={{ textDecoration: "none", color: "black" }}
//                   target="blank"
//                   href=""
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Us Section */}
//           <div className="col-lg-4 col-md-12">
//             <h5 className="text-black fw-bold">Contact Us</h5>
//             <div className="mb-2">
//               <a
//                 style={{ textDecoration: "none", color: "black" }}
//                 target="_blank"
//                 href=""
//               >
//                 <i className="fa-solid fa-envelope me-2"></i>
//                 styleloft@gmail.com
//               </a>
//             </div>
//             <div className="mb-2">
//               <a
//                 style={{ textDecoration: "none", color: "black" }}
//                 target="_blank"
//                 href="">
//                 <i className="fa-solid fa-phone me-2"></i>+91 9847340811
//               </a>
//             </div>
//             <div>
//               <a
//                 style={{ textDecoration: "none", color: "black" }}
//                 target="_blank"
//                 href="Oyur-Kottarakara Road, Kottarakkara, Kerala 691506, India"
//               >
//                 <i className="fa-solid fa-location-dot me-2"></i>
//                 Ayathil-Kollam Road,Kerala 691603, India
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Social Media Section */}
//         <div className="row justify-content-center mt-3">
//           <div className="col-auto">
//             <a
//               style={{ textDecoration: "none", color: "black" }}
//               target="_blank"
//               href="https://www.facebook.com/"
//             >
//               <i className="fa-brands fa-facebook"></i>
//             </a>
//           </div>
//           <div className="col-auto">
//             <a
//               className="ms-3"
//               style={{ textDecoration: "none", color: "black" }}
//               target="_blank"
//               href="https://www.instagram.com/accounts/login/?hl=en"
//             >
//               <i className="fa-brands fa-instagram"></i>
//             </a>
//           </div>
//           <div className="col-auto">
//             <a
//               className="ms-3"
//               style={{ textDecoration: "none", color: "black" }}
//               target="_blank"
//               href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D&mx=2"
//             >
//               <i className="fa-brands fa-twitter"></i>
//             </a>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="row mt-4">
//           <div className="col text-center">
//             <p className="mb-0">
//               &copy; 2025 <i>Style Loft. All Rights Reserved.</i>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;





import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from "../assets/logo.png";


const Footer = () => {
  return (
    <footer className='bg-warning text-black py-3 mt-2'>
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between'>
        {/* intro */}
        <div style={{width:'400px'}}>
        <h5 className="text-black fw-bold d-flex align-items-center">
              <img
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
                src={logo1}
                alt="Logo"
              />
              <i>Style Loft</i>
            </h5>
          
          {/* <h5><i class="fa-solid fa-music me-3"></i>
          Style Loft</h5> */}
          <p style={{color:'black'}}> Style Loft team and our passionate contributors, ensuring a seamless shopping experience for our valued customers.</p>
          <p style={{color:'black'}}>Code licensed MIT, docs CC BY 3.0.</p>
          <p style={{color:'black'}}>Currently v5.3.3.     </p>
        </div>
        {/* links */}
        <div className='d-flex flex-column'>
          <h5 style={{color:'black'}}>Links</h5>
          <Link to={'/'} style={{textDecoration:'none', color:'black'}}>Landing page</Link>
          <Link to={'/home'} style={{textDecoration:'none', color:'black'}}>Home page</Link>
          <Link to={'/history'} style={{textDecoration:'none', color:'black'}}>Watch History </Link>
        </div>
        {/* guides */}
        <div className='d-flex flex-column'>
          <h5 style={{color:'black'}}>Guides</h5>
          <a style={{textDecoration:'none', color:'black'}} target='blank'  href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9E5QZmfqfmUr2WZpI_9abkPDOhQczHZx4g&s" >React</a>
          <a style={{textDecoration:'none', color:'black'}} target='blank'  href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
          <a style={{textDecoration:'none', color:'black'}} target='blank' href="https://www.npmjs.com/package/react-router-dom">React Router</a>
        </div>
        {/* contact */}
        <div className='d-flex flex-column'>
          <h5 style={{color:'black'}} >Contact Us</h5>
          <div className='d-flex'>
              <input type="text" placeholder='enter your email here..' className='form-control me-2' />
              <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <a style={{textDecoration:'none', color:'black'}} target='_blank' href="https://en.wikipedia.org/wiki/Twitter"><i class="fa-brands fa-twitter"></i></a>
            <a style={{textDecoration:'none'}} target='_blank' href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            <a style={{textDecoration:'none', color:'black'}} target='_blank' href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
            <a style={{textDecoration:'none'}} target='_blank' href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
            <a style={{textDecoration:'none', color:'black'}} target='_blank' href="https://github.com/"><i class="fa-brands fa-github"></i></a>
            <a style={{textDecoration:'none'}} target='_blank' href="https://www.call.com/"><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3 ' style={{color:'black'}}>©2025 Premium Brands Opco LLC All Rights Reserved.</p>
    </div>
    </footer>
  )
}

export default Footer