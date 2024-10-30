import {
  FaHome,
  FaTools,
  FaComments,
  FaEnvelope,
  FaBars,
  FaLink,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { useTranslateContext } from "../context/TranslateContext";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { language } = useTranslateContext();

  const Links = [
    { to: "/", label: language === "ar" ? "الرئيسية" : "Home", icon: FaHome },
    {
      to: "/services",
      label: language === "ar" ? "الخدمات" : "Services",
      icon: FaTools,
    },
    { to: "/api", label: "Api", icon: FaLink },
  ];

  return (
    <header className="bg-white relative overflow-hidden px-6 lg:px-10 xl:px-14 shadow-slate-400 shadow-md">
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-1/4 h-auto opacity-5"
        >
          <path
            fill="#FF6B6B"
            d="M45.3,-57.7C59.9,-46.8,73.5,-33.5,77.9,-17.3C82.3,-1,77.5,18.1,67.3,32.8C57.1,47.5,41.5,57.8,24.5,64.3C7.5,70.8,-11,73.5,-27.2,68.4C-43.5,63.3,-57.5,50.5,-65.5,34.9C-73.5,19.2,-75.5,0.7,-71.3,-15.8C-67.1,-32.3,-56.7,-46.8,-43.3,-58C-29.9,-69.2,-14.9,-77.1,0.8,-78.1C16.5,-79.1,33,-68.5,45.3,-57.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <div className="text-2xl font-bold text-primary">SMM Store</div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-2">
            {Links.map((link) => (
              <NavigationMenuItem key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-700 hover:text-primary flex items-center px-2 py-2"
                >
                  <link.icon className="mr-2 w-4 h-4" /> {link.label}
                </Link>
              </NavigationMenuItem>
            ))}

            {isLoggedIn ? (
              <NavigationMenuItem className="ml-4">
                <Button
                  onClick={() => setIsLoggedIn(false)}
                  variant="destructive"
                  className="w-28"
                >
                  <FaSignOutAlt className=" w-4 h-4" />{" "}
                  {language === "ar" ? "تسجيل خروج" : "Logout"}
                </Button>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem className="flex items-center gap-4 pl-6">
                <Link to="/login">
                  <Button variant="outline" className="w-28">
                    <FaSignInAlt className="mr-2 w-4 h-4" />{" "}
                    {language === "ar" ? "تسجيل دخول" : "Login"}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    variant="default"
                    className="w-28 bg-green-500 hover:bg-green-600"
                  >
                    <FaUserPlus className="mr-2 w-4 h-4" />{" "}
                    {language === "ar" ? "تسجيل" : "Register"}
                  </Button>
                </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className=" bg-slate-200 ">
              <FaBars className="w-full scale-110 h-full" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-3/5">
            <div className="flex flex-col space-y-4 py-4">
              {Links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-primary flex items-center"
                >
                  <link.icon className="mr-2 w-4 h-4" /> {link.label}
                </Link>
              ))}
              {isLoggedIn ? (
                <Button
                  onClick={() => setIsLoggedIn(false)}
                  variant="destructive"
                >
                  <FaSignOutAlt className="mr-2 w-4 h-4" />{" "}
                  {language === "ar" ? "تسجيل خروج" : "Logout"}
                </Button>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" className="w-full">
                      <FaSignInAlt className="mr-2 w-4 h-4" />{" "}
                      {language === "ar" ? "تسجيل دخول" : "Login"}
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button
                      variant="default"
                      className="w-full bg-green-500 hover:bg-green-600"
                    >
                      <FaUserPlus className="mr-2 w-4 h-4" />{" "}
                      {language === "ar" ? "تسجيل" : "Register"}
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
