function AuthForm({ type = "login", onClose, onSwitch }) {
  const isLogin = type === "login";

  return (
    <div className="bg-foreground p-6 rounded-lg w-100 relative">
      
      <button
        onClick={onClose}
        className="absolute top-2 right-5 text-xl cursor-pointer"
      >
        ✕
      </button>

      <h2 className="text-lg font-bold mb-4">
        {isLogin ? "Login" : "Register"}
      </h2>

      <form className="flex flex-col gap-5">
        {!isLogin && (
          <input type="text" placeholder="email" className="pl-2" />
        )}

        <input type="text" placeholder="username" className="pl-2" />
        <input type="password" placeholder="password" className="pl-2" />

        {!isLogin && (
          <input type="password" placeholder="confirm password" className="pl-2" />
        )}

        <p className="text-sm">
          {isLogin ? "No account?" : "Already have an account?"}{" "}
          <span
            onClick={onSwitch}
            className="cursor-pointer font-bold"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>

        <button className="cursor-pointer w-full bg-background text-foreground rounded-2xl">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

export default AuthForm