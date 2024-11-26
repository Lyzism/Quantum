import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from 'lucide-react'

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Image - Background */}
      <div className="w-1/2 bg-gray-100">
        <img
          src="./space.jpg"
          alt="Login illustration"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Login form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-8">
          <div className="flex justify-center mb-20">
            <img
              src="./logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="h-55 w-60" // 55 px 60 px
            />
          </div>
          <h1 className="text-3xl font-bold mb-1">Login</h1>
          <p className="text-gray-500 mb-5">Enter your credentials to access your account</p>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  placeholder="Enter password"
                  type={showPassword ? "text" : "password"} 
                  required 
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              Login
            </Button>
          </form>
          <div>
            <p className="text-gray-500 mt-2 text-sm text-center">© Copyright Quantum 2024  </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage