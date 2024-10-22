import axios from "axios";
import toast from "react-hot-toast";

const checkmailApi = "http://localhost:8000/api/v1/checkMail";
const loginApi = "http://localhost:8000/api/v1/login";
const createApi = "http://localhost:8000/api/v1/create";




async function create(formData) {
    try {
      const response = await axios.post(createApi, formData);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
// checkmail..................

export async function checkmail(formData) {
    try {
      const response = await axios.post(checkmailApi, {
        email: formData.get("email"),
      });
      if (response.status === 200) {
        return await create(formData);
      }
    } catch (e) {
      if (e.response && e.response.data.message == "email registered") {
        throw new Error(toast.error("email already exists !"));
      }
    }
  }
  
  // login ....................
  export async function login(data) {
    try {
      const response = await axios.post(loginApi, data);
      if (response.data) {
        toast.success("Login successful");
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        return response.data;
      }
    } catch (e) {
      if (e.response.data.message === "Email not found")
        throw new Error(toast.error("Email not found"));
  
      if (e.response.data.message === "Invalid password")
        throw new Error(toast.error("Invalid password"));
    }
  }
  