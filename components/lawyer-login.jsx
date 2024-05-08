
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function LawyerLogin() {
  return (
    (<div className="flex flex-col min-h-[100dvh] bg-gray-100 dark:bg-gray-900">
      <header
        className="px-4 md:px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <Link className="flex items-center gap-2" href="#">
          <GavelIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
          <span className="text-xl font-bold text-gray-900 dark:text-gray-50">E-Court</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 md:px-6">
        <Card className="w-full max-w-md p-6 md:p-8">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold">Welcome back, Lawyer</CardTitle>
            <CardDescription>Enter your email and password to access the E-Court platform.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" type="email" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link className="text-sm text-gray-500 hover:underline" href="#">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-500">
            Don't have an account?
            <Link
              className="font-medium text-gray-900 hover:underline dark:text-gray-50"
              href="#">
              Register as a lawyer
            </Link>
          </CardFooter>
        </Card>
      </main>
      <footer
        className="px-4 md:px-6 py-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 E-Court. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link
            className="text-sm text-gray-500 hover:underline dark:text-gray-400"
            href="#">
            Privacy
          </Link>
          <Link
            className="text-sm text-gray-500 hover:underline dark:text-gray-400"
            href="#">
            Terms
          </Link>
        </div>
      </footer>
    </div>)
  );
}

function GavelIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
      <path d="m16 16 6-6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
      <path d="m21 11-8-8" />
    </svg>)
  );
}
