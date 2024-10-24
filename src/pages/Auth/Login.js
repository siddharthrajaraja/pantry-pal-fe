


import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>

          {/* <button onClick={loginwithgoogle}>
            Sign in with google
          </button> */}
        
        </form>
      </div>
    </Layout>
  );
};

export default Login;














// import React, { useState, useEffect } from "react";
// import Layout from "./../../components/Layout/Layout";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
// import { useAuth } from "../../context/auth";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [auth, setAuth] = useAuth();
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // Load Google OAuth script
//     const loadGoogleScript = () => {
//       const script = document.createElement("script");
//       script.src = "https://accounts.google.com/gsi/client";
//       script.async = true;
//       script.defer = true;
//       document.head.appendChild(script);

//       script.onload = () => {
//         initializeGoogleButton();
//       };
//     };

//     loadGoogleScript();
//   }, []);

//   const initializeGoogleButton = () => {
//     if (window.google) {
//       window.google.accounts.id.initialize({
//         client_id: "DWevHbdT1vXHZwlijKhZI7rLsmMwKzhy", // Replace with your Google Client ID
//         callback: handleGoogleResponse
//       });

//       window.google.accounts.id.renderButton(
//         document.getElementById("googleButton"),
//         { theme: "outline", size: "large", width: 250 }
//       );
//     }
//   };

//   const handleGoogleResponse = async (response) => {
//     try {
//       setLoading(true);
//       // Send the ID token to your backend
//       const res = await axios.post("/api/v1/auth/google-login", {
//         token: response.credential
//       });

//       if (res && res.data.success) {
//         toast.success(res.data.message);
//         setAuth({
//           ...auth,
//           user: res.data.user,
//           token: res.data.token,
//         });
//         localStorage.setItem("auth", JSON.stringify(res.data));
//         navigate(location.state || "/");
//       }
//     } catch (error) {
//       console.error("Google login error:", error);
//       toast.error("Google login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Regular email/password login
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const res = await axios.post("/api/v1/auth/login", {
//         email,
//         password,
//       });
//       if (res && res.data.success) {
//         toast.success(res.data.message);
//         setAuth({
//           ...auth,
//           user: res.data.user,
//           token: res.data.token,
//         });
//         localStorage.setItem("auth", JSON.stringify(res.data));
//         navigate(location.state || "/");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Layout title="Login - Ecommerce App">
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <h4 className="title">LOGIN FORM</h4>

//           {/* Google Login Button */}
//           <div className="mb-3" style={{ textAlign: 'center' }}>
//             <div id="googleButton"></div>
//           </div>

//           {/* Separator */}
//           <div className="mb-3" style={{ textAlign: 'center' }}>
//             <p style={{ 
//               color: '#666', 
//               margin: '15px 0',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}>
//               <span style={{ 
//                 borderBottom: '1px solid #ccc',
//                 width: '100px',
//                 marginRight: '10px'
//               }}></span>
//               OR
//               <span style={{ 
//                 borderBottom: '1px solid #ccc',
//                 width: '100px',
//                 marginLeft: '10px'
//               }}></span>
//             </p>
//           </div>

//           <div className="mb-3">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               placeholder="Enter Your Email"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               placeholder="Enter Your Password"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={() => navigate("/forgot-password")}
//               style={{ marginRight: '10px' }}
//             >
//               Forgot Password
//             </button>

//             <button 
//               type="submit" 
//               className="btn btn-primary"
//               disabled={loading}
//             >
//               {loading ? "Loading..." : "LOGIN"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Login;