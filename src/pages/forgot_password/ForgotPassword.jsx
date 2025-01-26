
// import React, { useState } from 'react';
// import { forgotPasswordApi, verifyOtpApi } from '../../apis/Api';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'tailwindcss/tailwind.css';
// import './ForgotPassword.css';

// const ForgotPassword = () => {
//     const [phone, setPhone] = useState('');
//     const [isSent, setIsSent] = useState(false);
//     const [otp, setOtp] = useState('');
//     const [newPassword, setNewPassword] = useState('');

//     const handleSendOtp = (e) => {
//         e.preventDefault();
//         forgotPasswordApi({ phone }).then((res) => {
//             if (res.status === 200) {
//                 toast.success(res.data.message);
//                 setIsSent(true);
//             }
//         }).catch((error) => {
//             if (error.response && (error.response.status === 400 || error.response.status === 500)) {
//                 toast.error(error.response.data.message);
//             }
//         });
//     };

//     const handleVerifyOtp = (e) => {
//         e.preventDefault();
//         const data = {
//             phone: phone,
//             otp: otp,
//             newPassword: newPassword,
//         };
//         verifyOtpApi(data).then((res) => {
//             if (res.status === 200) {
//                 toast.success(res.data.message);
//             }
//         }).catch((error) => {
//             if (error.response && (error.response.status === 400 || error.response.status === 500)) {
//                 toast.error(error.response.data.message);
//             }
//         });
//     };

//     return (
//         <>
//             <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick />
//             <div className="forgot-password-container bg-blue-100 min-h-screen flex items-center justify-center">
//                 <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//                     <h3 className="text-2xl font-bold text-center mb-4">Forgot Password</h3>
//                     <form>
//                         <div className="mb-4">
//                             <span className="flex items-center">
//                                 <h4 className="mr-2">+977</h4>
//                                 <input
//                                     disabled={isSent}
//                                     onChange={(e) => setPhone(e.target.value)}
//                                     type="number"
//                                     className="form-control"
//                                     placeholder="Enter valid phone number"
//                                 />
//                             </span>
//                         </div>
//                         <button
//                             disabled={isSent}
//                             onClick={handleSendOtp}
//                             className="btn btn-dark w-full mb-4"
//                         >
//                             Send OTP
//                         </button>

//                         {isSent && (
//                             <>
//                                 <hr className="my-4" />
//                                 <p className="text-center">OTP has been sent to {phone} ✅</p>
//                                 <div className="mb-4">
//                                     <input
//                                         onChange={(e) => setOtp(e.target.value)}
//                                         type="number"
//                                         className="form-control"
//                                         placeholder="Enter valid OTP"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <input
//                                         onChange={(e) => setNewPassword(e.target.value)}
//                                         type="password"
//                                         className="form-control"
//                                         placeholder="Set new password"
//                                     />
//                                 </div>
//                                 <button
//                                     onClick={handleVerifyOtp}
//                                     className="btn btn-primary w-full"
//                                 >
//                                     Verify OTP and Set Password
//                                 </button>
//                             </>
//                         )}
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ForgotPassword;

import React, { useState } from "react";
import { toast } from "react-toastify";
import { ForgetPasswordApi, verifyOtpApi } from "../../apis/Api";
import "./ForgotPassword.css";
// import Navbar from "../../components/Navbar";
export const ForgotPassword = () => {
  const [phone, setPhone] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // send otp function
  const handleSendOtp = (e) => {
    e.preventDefault();
    // api call
    ForgetPasswordApi({ phone })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          setIsSent(true);
        }
      })
      .catch((error) => {
        if (error.response.status === 400 || 500) {
          toast.error(error.response.data.message);
        }
      });
  };
  // verify otp and set new password
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const data = {
      phone: phone,
      otp: otp,
      newPassword: newPassword,
    };
    // api call
    verifyOtpApi(data)
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        if (error.response.status === 400 || 500) {
          toast.error(error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="container mt-3">
        <h3>Forgot Password</h3>
        <form className="w-25">
          <span>
            <h4>+977</h4>
            <input
              disabled={isSent}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Enter Mobile number"
            ></input>
          </span>
          <button
            disabled={isSent}
            onClick={handleSendOtp}
            className="btn btn-dark mt-2 w-100"
          >
            Send OTP{" "}
          </button>
          {isSent && (
            <>
              <hr />
              <p> OTP has been sent to {phone} ✅</p>
              <input
                onChange={(e) => setOtp(e.target.value)}
                type="number"
                className="form-control mt-3"
                placeholder="Enter valid OTP"
              ></input>
              <input
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                className="form-control mt-3"
                placeholder="Enter new password"
              ></input>
              <button
                onClick={handleVerifyOtp}
                className="btn btn-primary mt-2 w-100"
              >
                Reset Password
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};
