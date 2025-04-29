import React, { useState } from "react";
import { Button, CircularProgress, TextField, Typography, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";
import axios from "axios";
import { auth } from "../firebase"; 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8jrW2QeNLzlJX9fwcmkyR2KG47nOysFQ`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );

      const user = {
        email,
        id: response.data.localId,
      };

      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(loginSuccess({ token: response.data.idToken, user }));

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setErrorMsg(
        error.response?.data?.error?.message || "Kirishda xatolik yuz berdi"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setErrorMsg("");
  
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      const token = await user.getIdToken(); 
  
      const userInfo = {
        email: user.email,
        id: user.uid,
        first_name: user.displayName,
      };
  
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userInfo));
      dispatch(loginSuccess({ token, user: userInfo }));
  
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setErrorMsg(error.message || "Google orqali kirishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <Typography variant="h4" className="text-center mb-6 text-blue-700 font-bold">
          Kirish
        </Typography>

        {errorMsg && (
          <Alert severity="error" className="mb-4">
            {errorMsg}
          </Alert>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <TextField label="Email" name="email" variant="outlined" fullWidth required />
          <TextField label="Parol" name="password" type="password" variant="outlined" fullWidth required />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            className="w-full mt-2"
          >
            {loading ? <CircularProgress size={24} /> : "Email orqali kirish"}
          </Button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-400">yoki</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <Button
          variant="outlined"
          color="error"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full"
        >
          {loading ? <CircularProgress size={24} /> : "Google bilan kirish"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
