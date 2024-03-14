import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-4">
      <div className="w-full max-w-[50vh] gap-3 flex flex-col">
        <h2 className="font-bold text-xl mb-3 lg:text-2xl">
          Create your account
        </h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
