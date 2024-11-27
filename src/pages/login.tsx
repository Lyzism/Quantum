import { useState } from "react"
import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Moon, Sun } from 'lucide-react'

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex min-h-screen dark:bg-zinc-950 text-foreground">
      {/* Dark mode toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-50"
        onClick={toggleDarkMode}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>

      {/* Image - Background */}
      <div className="w-1/2 bg-muted">
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
              src={theme === "dark" ? "./logo-theme-dark.png" : "./logo-theme-light.png"}
              alt="Logo"
              width={80}
              height={80}
              className="h-55 w-60" // 55 px 60 px
            />
          </div>
          <h1 className="text-3xl font-bold mb-1 text-foreground">Login</h1>
          <p className="text-muted-foreground mb-5">Enter your credentials to access your account</p>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input id="email" type="email" placeholder="Enter email" required className="dark:bg-zinc-950 border-input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  placeholder="Enter password"
                  type={showPassword ? "text" : "password"} 
                  required 
                  className="dark:bg-zinc-950 border-input"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out"
            >
              Login
            </Button>
          </form>
          <div>
            <p className="text-muted-foreground mt-2 text-sm text-center">© Copyright Quantum 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

