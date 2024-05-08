
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, Scale } from "lucide-react";

export function ClentLogin() {
  return (
    (<div
      className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mb-6">
<Scale/>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center dark:text-gray-200">Welcome to Ecourt</h1>
        <form className="space-y-4">
          <div>
            <Label className="block mb-1 dark:text-gray-300" htmlFor="username">
              Username
            </Label>
            <Input id="username" placeholder="Enter your username" required type="text" />
          </div>
          <div>
            <Label className="block mb-1 dark:text-gray-300" htmlFor="password">
              Password
            </Label>
            <Input id="password" placeholder="Enter your password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
        <p className="mt-4"> New to eCourtroom? 
        <Link href="clients/register">
        <span className="text-blue-500"> Register now!</span>
        </Link>
        </p>
      </div>
    </div>) 
  );
}
