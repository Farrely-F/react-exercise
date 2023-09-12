import Input from "../Elements/Input";
import Button from "../Elements/Button";

export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-y-4 w-full">
      <Input name="Email" type="name" variant="dark" placeholder="email">
        Email:
      </Input>
      <Input name="Password" type="password" variant="dark" placeholder="password">
        Password:
      </Input>
      <Button hover="bg-slate-300" variant="slate-100" style="mt-8">
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
