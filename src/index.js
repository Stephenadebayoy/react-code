import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom'; // i will remove this
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const navbar = (
//   <nav>
//     <h1>Bobs Bistro</h1>
//     <ul>
//       <li>Menu</li>
//       <li>About</li>
//       <li>Contact</li>
//       <li>Settings</li>
//       <li>Logistic</li>
//       <li>shippment</li>
//     </ul>
//   </nav>
// );
// ReactDOM.render(navbar, document.getElementById('root'));

// const page = (
//   <div>
//     <img src={logo} alt='' />
//     {/* <img src={logo2} alt='' /> */}
//     <h1>My awesome website in React</h1>
//     <h3>Reasons I love React</h3>
//     <ul>
//       <li>It's hireable skills </li>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

//document.getElementById('root').append(JSON.stringify(page));
// ReactDOM.render(page, document.getElementById('root'));

//or like this
// ReactDOM.render(
//   <div>
//     <img src={logo} alt='' />
//     {/* <img src={logo2} alt='' /> */}
//     <h1>My awesome website in React</h1>
//     <h3>Reasons I love React</h3>
//     <ul>
//       <li>It's hireable skills </li>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>,
//   document.getElementById('root')
// );

//or but the page function must be in camelCase and inside </>
// function Page() {
//   return (
//     <div>
//       <header>
//         <img src={logo} alt='' />
//         <h1>My awesome website in React</h1>
//       </header>
//       <h3>Reasons I love React</h3>
//       <ul>
//         <li>It's hireable skills </li>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//       <footer>
//         <small>&copy; Stephen development .All rights reserved</small>
//       </footer>
//     </div>
//   );
// }

//ReactDOM.render(<Page />, document.getElementById('root'));

//adding more function or calling a function in a function composing it

// Page is the parent while  Header, MainContent and Footer is the children
// function Header() {
//   return (
//     <>
//       <header>
//         <nav className='nav'>
//           <img src={logo} alt='' className='logo' />
//           <ul className='nav-items'>
//             <li>Price</li>
//             <li>About</li>
//             <li>Contact</li>
//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// }
// function MainContent() {
//   return (
//     <>
//       <h1>Reasons I love React</h1>
//       <ol>
//         <li>It's hireable skills </li>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ol>
//     </>
//   );
// }
// function Footer() {
//   return (
//     <>
//       <footer>
//         <small>&copy; Stephen development .All rights reserved</small>
//       </footer>
//     </>
//   );
// }
// function Page() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }
// ReactDOM.render(<Page />, document.getElementById('root'));

// export all in their personal file js

function App() {
  return (
    <div className='container'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
// according to Page they will call it App
