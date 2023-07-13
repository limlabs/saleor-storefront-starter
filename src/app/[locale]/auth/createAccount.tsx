import Button from "@/app/daisyui/button";
import TextInput from "@/app/daisyui/text-input";

export const CreateAccount = () => {
  return (
    <div className="h-auto bg-slate-200 w-full flex flex-col items-center p-8">
      <h1 className="font-bold text-xl text-black">CREATE ACCOUNT</h1>
      <section className="flex flex-col gap-4 text-black">
        <div className="flex flex-col">
          <label>First Name</label>
          <TextInput className="bg-white border border-black" />
        </div>
        <div className="flex flex-col">
          <label>Last Name</label>
          <TextInput className="bg-white border border-black" />
        </div>
        <div className="flex flex-col">
          <label>Email*</label>
          <TextInput className="bg-white border border-black" />
        </div>
        <div className="flex flex-col">
          <label>Password*</label>
          <TextInput className="bg-white border border-black" />
        </div>
        <div className="flex flex-col">
          <label>Confirm Password*</label>
          <TextInput className="bg-white border border-black" />
        </div>
      </section>
      <div className="mt-4">
        <Button>REGISTER</Button>
      </div>
    </div>
  );
};
