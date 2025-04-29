import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Avatar,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaBullhorn,
  FaRegCalendarAlt,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    profilePhoto: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profilePhoto: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSnackbar({
        open: true,
        type: "success",
        message: "Profil ma'lumotlari saqlandi!",
      });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Box className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 py-10 gap-6">
      <Box className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-4">
        <Typography variant="h6" className="text-green-600 font-semibold mb-4">
          My Study Center
        </Typography>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2 text-green-600 font-medium cursor-pointer">
            <FaUserCircle /> Account
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <FaBookOpen /> My Courses
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <FaChalkboardTeacher /> My Teachers
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <FaBullhorn /> News & Updates
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
            <FaRegCalendarAlt /> Events
          </li>
        </ul>
        <div className="mt-6 border-t pt-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 hover:underline"
          >
            <FaSignOutAlt /> Log out
          </button>
        </div>
      </Box>

      <Box className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
          />

          <Box className="flex items-center gap-3 col-span-1 md:col-span-2">
            <Avatar src={preview} sx={{ width: 48, height: 48 }} />
            <Button variant="outlined" component="label">
              Upload
              <input type="file" hidden accept="image/*" onChange={handleImageChange} />
            </Button>
          </Box>

          <Box className="col-span-1 md:col-span-2">
            <Button
              type="submit"
              variant="contained"
              color="success"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Save changes"}
            </Button>
          </Box>
        </form>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbar.type}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Profile;
