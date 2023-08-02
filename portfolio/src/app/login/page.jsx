export default function login() {
  return (
    <main>
      <div className="flex flex-col h-screen items-center justify-center ">
        <h1>Login</h1>
        <form className="flex flex-col m-20 w-[350px] gap-y-5 ">
          <label htmlFor="last">Email</label>
          <input
            className="p-3 text-black outline-none rounded-sm"
            type="text"
            placeholder="email"
          />
          <label htmlFor="last">Password</label>
          <input
            className="p-3 text-black outline-none rounded-sm"
            type="text"
            placeholder="password"
          />
          <button
            className="p-2 w-[80px] mx-auto border-2 border-white rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
