'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function signup() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    userName: '',
    password: '',
    email: '',
  });
  const [loading, setLoading] = React.useState(false);
  const onSignup = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post('/api/signup', user);
      console.log(user);
      router.push('/login');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { names, value } = e.target;
    setUser({ ...user, [names]: value });
  };
  return (
    <main>
      <div className="flex flex-col h-screen items-center justify-center ">
        <h1>{loading ? 'LOADING...' : 'Signup'}</h1>
        <form
          className="flex flex-col m-20 w-[350px] gap-y-5 "
          onSubmit={onSignup}
        >
          <label htmlFor="first">First name:</label>
          <input
            className="p-3 text-black outline-none rounded-sm"
            placeholder="userName"
            type="text"
            name="userName"
            onChange={handleChange}
          />
          <label htmlFor="last">Email</label>
          <input
            className="p-3 text-black outline-none rounded-sm"
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="last">Password</label>
          <input
            className="p-3  text-black outline-none rounded-sm"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <button
            className="p-2 w-[80px] mx-auto border-2 border-white rounded-md"
            type="submit"
            onClick={onSignup}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
