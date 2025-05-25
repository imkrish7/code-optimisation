"use client"
import { ChangeEvent, FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const validateEmail = () => {
    let re = /\S+@\S+\.\S+/
    return email.length > 0 && re.test(email);
  }
  const handleSubumit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (validateEmail()) {
      // Do something
    }
  }
  return (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Subscribe to our newsletter for the latest articles and updates
      </p>
      <form onSubmit={handleSubumit} className="max-w-md mx-auto flex gap-4">
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          required
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 text-gray-600 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
