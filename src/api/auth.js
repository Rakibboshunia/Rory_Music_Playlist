// src/api/auth.js

// fake delay to simulate backend
export const signup = async (data) => {
  console.log("Signup API called with:", data);

  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 700);
  });
};

export const login = async (data) => {
  console.log("Login API called with:", data);

  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 600);
  });
};
