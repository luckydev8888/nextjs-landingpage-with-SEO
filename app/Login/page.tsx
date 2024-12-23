"use client"

import React from "react"

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <span className="ml-2 text-3xl font-bold text-[#FF4500] hidden sm:block">
            REDDKARMA
          </span>
        </div>

        {/* Welcome Message */}
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Welcome to back 👋
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please sign-in to your account to manage your deeplinks.
        </p>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-[#FF4500]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-[#FF4500]"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 text-gray-500"
              >
                👁️
              </button>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-[#7367F0] focus:ring-[#7367F0] focus:outline-none"
              />
              <span className="ml-2 text-sm text-gray-600">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-[#FF4500] hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF4500] text-white py-2 rounded-md hover:bg-red-300 transition duration-300"
          >
            Sign in
          </button>
        </form>

        {/* Create Account */}
        <p className="text-center text-gray-500 mt-6">
          New on our platform?{" "}
          <a href="#" className="text-[#FF4500] hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
