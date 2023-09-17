import Input from "../Elements/Input";
import Button from "../Elements/Button";

export const LoginForm = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    window.location.href = "/products";
    console.log("login");
  };
  return (
    <form className="flex flex-col gap-y-4 w-full" onSubmit={handleLogin}>
      <Input name="email" type="email" variant="dark" placeholder="email">
        Email:
      </Input>
      <Input name="password" type="password" variant="dark" placeholder="password">
        Password:
      </Input>
      <Button hover="bg-slate-300" variant="slate-100" style="mt-8" type="submit">
        Login
      </Button>
    </form>
  );
};

export const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-y-4 w-full">
      <Input name="fullName" type="name" variant="dark" placeholder="Full Name">
        Full Name:
      </Input>
      <Input name="Email" type="email" variant="dark" placeholder="email">
        Email:
      </Input>
      <Input name="Password" type="password" variant="dark" placeholder="password">
        Password:
      </Input>
      <Button hover="bg-slate-300" variant="slate-100" style="mt-8">
        Register
      </Button>
    </form>
  );
};
