import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* from login page */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-8">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="nama@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>

      {/* Image - Background */}
      <div className="w-1/2 bg-gray-100">
        <img
          src="../public/space.jpg"
          alt="Login illustration"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}

export default LoginPage