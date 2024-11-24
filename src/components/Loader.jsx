// import "./Loader.css";

// const Loader = () => {
//   return (
//     <div className="snowflake-loader">
//       <div className="flocon">
//         <div className="branch"></div>
//         <div className="branch"></div>
//         <div className="branch"></div>
//         <div className="branch"></div>
//         <div className="branch"></div>
//         <div className="branch"></div>
//       </div>
//     </div>
//   );
// };

// export default Loader;


import "./Loader.css";

const Loader = () => {
  return (
    <div className="snowflake-loader">
      <div className="snowflake">❅</div>
    </div>
  );
};

export default Loader;


// import "./Loader.css";

// const Loader = () => {
//   return (
//     <div className="snowflake-loader">
//       {Array.from({ length: 20 }).map((_, i) => (
//         <div key={i} className="snowflake" style={{ animationDelay: `${i * 0.5}s` }}>
//           ❅
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Loader;
