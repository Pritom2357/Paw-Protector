// dashboard.jsx
import { Link, useNavigate } from "react-router-dom";
import ProfilePictureCard from "../Components/profilePictureCard";
import FeaturesSection from "../Components/FeaturesSection";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import apiConfig from "../config/apiConfig";
import { useAutoTranslate } from "react-autolocalise";
import Header from "../Components/Header";
import { usePet } from "../context/PetContext";
import PetSwitcher from "../components/PetSwitcher";
import Footer from "../components/Footer";
import ChatButton from "../components/ChatButton";

const placeholder = "/placeholder.png";

function Dashboard() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { t: translate } = useAutoTranslate();
  const [useTranslation, setUseTranslation] = useState(true);
  const t = useTranslation && translate ? translate : (s) => s;

  const [user, setUser] = useState(null);
  const current_pet_count = parseInt(localStorage.getItem('pet_count'));
  

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }

    const user_local = JSON.parse(localStorage.getItem("user"));
    setUser(user_local);
    if(user_local?.roles[0] !== "owner"){
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleTranslationToggle = (newState) => {
    setUseTranslation(newState);
  };

  return (
    <>
      <Header 
        translationState={useTranslation} 
        onTranslationToggle={handleTranslationToggle}
      />

      {/* Language Toggle Button */}
      <button
        onClick={() => setUseTranslation((prev) => !prev)}
        className="fixed top-6 right-6 px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-700 transition z-50"
        aria-label="Toggle language"
      >
        {useTranslation ? "BN" : "EN"}
      </button>

      <div className="relative min-h-screen flex flex-col bg-[#edfdfd] text-slate-900 overflow-hidden mt-28">
        {/* animated background shapes */}
        <div className="pointer-events-none fixed -top-32 -left-16 h-52 w-52 bg-[#fdd142]/60 rounded-full blur-3xl animate-[float_7s_ease-in-out_infinite]" />
        <div className="pointer-events-none fixed top-40 -right-10 h-40 w-40 bg-[#fdd142]/50 rounded-full blur-2xl animate-[float_5s_ease-in-out_infinite_alternate]" />
        <div className="pointer-events-none fixed bottom-10 left-10 h-16 w-16 bg-[#fdd142] rounded-full opacity-80 animate-[bouncey_4s_ease-in-out_infinite]" />
        <div className="pointer-events-none fixed -bottom-24 right-20 h-72 w-72 border-[18px] border-[#fdd142]/20 rounded-full animate-[spin_20s_linear_infinite]" />

        {/* diagonal dots accent */}
        <div className="pointer-events-none absolute -top-6 right-8 h-32 w-32 opacity-30 animate-[slideDots_10s_linear_infinite]">
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#0f172a]/40" />
            ))}
          </div>
        </div>

        {current_pet_count !== 0 && (
          <section className="mx-auto w-full px-2 sm:px-4">
            <FeaturesSection />
            <div className="w-full flex justify-center my-2">
              <div className="h-[3px] w-2/3 bg-linear-to-r from-[#fdd142] via-[#0f172a]/30 to-[#fdd142] rounded-full shadow-md opacity-70" />
            </div>
          </section>
        )}

        <PetSwitcher />

        {/* Random Cat Fact */}
        <section className="mx-auto max-w-6xl w-full px-4 mt-6">
          <div className="text-center backdrop-blur-md rounded-3xl p-6">
            <h2 className="text-lg md:text-xl italic text-slate-700">
              {t("Cats sleep for 70% of their lives.")}
            </h2>
          </div>
        </section>

        {/* Bottom spacing */}
        <br /><br /><br /><br />
      </div>

      <Footer />

      {/* Floating Chat Button */}
      <ChatButton />

       {/* Floating Call Button */}
       <a
         href="tel:+8801888548012"
         className="fixed bottom-8 left-8 bg-red-500 w-16 h-16 flex flex-col items-center justify-center rounded-full shadow-lg hover:bg-red-600 transition transform hover:scale-110 text-center"
         aria-label={t("Call emergency contact")}
       >
         <img src="/icons/call-icon.png" alt={t("Call icon")} className="w-6 h-6 mb-1" />
         <span className="text-[10px] font-semibold text-white leading-none">
           {t("Emergency")}
         </span>
       </a>

      {/* keyframes */}
      <style>{`
        @keyframes slideup {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bouncey {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.03); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideDots {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-30px) translateX(30px); }
        }
      `}</style>
    </>
  );
}

export default Dashboard;

