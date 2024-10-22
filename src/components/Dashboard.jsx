import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Card from "./Card";
import Fotter from "./Fotter";
import toast from "react-hot-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      navigate("/");
      toast.error("please login first ")
    }
  }, [token, navigate]);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap container mx-auto">
        {/* Main flex container */}
        <div className="bg-slate-600 flex flex-row gap-4 w-full h-screen">
          {/* Profile component on the left with decreased width */}
          <div className="box1 lg:w-1/5 md:w-1/4 sm:w-full bg-red-50 h-full sticky top-0 overflow-y-auto">
            <Profile />
          </div>

          {/* Cards section on the right */}
          <div className="box2 lg:w-[95%] md:w-3/4 sm:w-full h-full overflow-y-auto p-4">
            <div className="cards flex justify-around flex-wrap gap-4 w-full mt-16">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default Dashboard;
