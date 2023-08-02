export default function signup() {
  return (
    <main>
      <div className="flex flex-col h-screen items-center justify-center ">
        <h1>Signup</h1>
        <form
          className="flex flex-col m-20 w-[350px] gap-y-5 "
          action="/send-data-here"
          method="post"
        >
          <label for="first">First name:</label>
          <input
            className="p-3 outline-none rounded-sm"
            placeholder="username"
            type="text"
          />
          <label for="last">Email</label>
          <input
            className="p-3 outline-none rounded-sm"
            type="text"
            placeholder="email"
          />
          <label for="last">Password</label>
          <input
            className="p-3 outline-none rounded-sm"
            type="text"
            placeholder="password"
          />
          <button className="p-2 bg-blue-700 rounded-sm" type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
