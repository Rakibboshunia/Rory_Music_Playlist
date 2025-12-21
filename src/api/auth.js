// src/api/auth.js

// fake delay to simulate backend
export const signup = async (data) => {
  c

  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 700);
  });
};

export const login = async (data) => {
  

  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 600);
  });
};
