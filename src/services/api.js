import axios from "axios";

export async function loginStudent(email, password) {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login", {
      email: email,
      password: password,
    });

    return response.data; // Assuming the server sends back relevant data upon successful login
  } catch (error) {
    throw error;
  }
}
