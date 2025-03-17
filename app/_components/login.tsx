import { User } from "lucide-react";

export default function Login() {
  return (
    <div className="z-40 flex h-8 items-center gap-2">
      <div className="flex h-full w-44 items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 backdrop-blur-sm">
        <User className="opacity-50" size={20} />
        <span className="text-sm font-medium">Hi, Hackers</span>
      </div>

      <button
        className="h-full rounded-full bg-hackathon-primary px-5"
        type="button"
      >
        Login
      </button>
    </div>
  );
}
