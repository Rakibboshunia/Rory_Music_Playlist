import React from "react";

const icons = {
  google: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.2045c0-.638-.057-1.251-.163-1.843H9v3.486h4.844c-.207 1.137-.836 2.1-1.786 2.752v2.288h2.888c1.693-1.562 2.695-3.86 2.695-6.683z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.47-.803 5.96-2.178l-2.888-2.288C11.577 13.02 10.35 13.5 9 13.5 6.54 13.5 4.543 11.82 3.78 9.582H.797V11.92C2.293 15.65 5.404 18 9 18z" fill="#34A853"/>
      <path d="M3.78 9.582C3.571 8.845 3.5 8.06 3.5 7.25s.07-1.596.28-2.332V2.64H.797A9 9 0 000 9.999c0 1.447.276 2.824.797 4.16l2.983-2.577z" fill="#FBBC05"/>
      <path d="M9 3.75c1.32 0 2.507.455 3.444 1.346l2.58-2.58C13.412.99 11.372 0 9 0 5.404 0 2.293 2.35.797 5.08l2.983 2.57C4.543 6.18 6.54 3.75 9 3.75z" fill="#EA4335"/>
    </svg>
  ),
  apple: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.365 1.43c.135 1.585-.504 3.09-1.815 4.154-1.02.845-2.256 1.388-3.39 1.062-.108-1.276.48-2.678 1.553-3.53 1.02-.804 2.366-1.362 3.652-1.686z" fill="#111"/>
      <path d="M20.578 8.325c-.45-1.13-1.254-2.17-2.41-2.75-1.02-.52-2.135-.785-3.3-.785-1.24 0-2.465.265-3.48.82-1.25.675-2.14 1.84-2.61 3.04-.74 1.79-.23 3.95.86 5.34.63.87 1.39 1.66 2.35 1.66.86 0 1.18-.54 2.2-.54 1.01 0 1.3.54 2.21.52.98-.02 1.6-.86 2.23-1.76.86-1.28 1.22-2.78 1.07-4.2-.07-.65-.28-1.23-.64-1.63z" fill="#111"/>
    </svg>
  ),
};

export default function SocialButton({ provider = "google", onClick }) {
  const label = provider === "google" ? "Sign in with Google" : "Sign in with Apple";
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 flex items-center gap-3 justify-center px-4 py-2 rounded-lg border border-gray-200 bg-white hover:shadow-sm text-sm"
    >
      <span>{icons[provider]}</span>
      <span>{label}</span>
    </button>
  );
}
