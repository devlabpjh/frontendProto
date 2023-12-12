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

export async function logout() {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/logout", {
       withCredentials: true,
      });
    return response.data; // You might want to return some data from the server upon successful logout
  } catch (error) {
    throw error;
  }
}
