"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircleQuestion, Figma, Settings } from "lucide-react";
import Login from "./_components/login";
import TeamPass from "./_components/team-pass";
import { cn } from "./_lib/utils";

export default function Page() {
  const [ticket1, setTicket1] = useState("");
  const [ticket2, setTicket2] = useState("");
  const [claimedTicket1, setClaimedTicket1] = useState(false);
  const [claimedTicket2, setClaimedTicket2] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [showTeamPass, setShowTeamPass] = useState(false);
  const [whirlpoolAnimation, setWhirlpoolAnimation] = useState(false);
  const [collide, setCollide] = useState(false);

  const handleClaimTicket = (ticketNumber: 1 | 2) => {
    if (ticketNumber === 1 && ticket1) {
      setClaimedTicket1(true);
    } else if (ticketNumber === 2 && ticket2) {
      setClaimedTicket2(true);
    }
  };

  useEffect(() => {
    if (claimedTicket1 && claimedTicket2) {
      setTimeout(() => {
        setWhirlpoolAnimation(true);
        setTimeout(() => {
          setWhirlpoolAnimation(false); // Ensure whirlpool animation completes
          setCollide(true);
          setTimeout(() => {
            setShowFlash(true);
            setTimeout(() => {
              setShowFlash(false);
              setTimeout(() => {
                setShowTeamPass(true);
              }, 1000);
            }, 1000);
          }, 1500);
        }, 2000);
      }, 1000);
    }
  }, [claimedTicket1, claimedTicket2]);

  return (
    <div className="flex min-h-screen flex-col items-center gap-10 overflow-hidden pb-48 pt-8 md:pb-24">
      {showFlash && <div className="fixed inset-0 z-50 bg-white animate-flash" />}
      <Login />
      <div className="mt-4 flex flex-col items-center gap-4">
        <h1 className="text-center text-4xl font-semibold capitalize tracking-tighter text-white sm:text-6xl">
          Claim Your Ticket
        </h1>
        <button className="flex rounded-full border-2 border-white/10 bg-white/10 px-4 py-2 text-xs font-medium tracking-tighter text-white/70 backdrop-blur-md hover:bg-white/15 sm:text-base">
          <MessageCircleQuestion className="mr-0.5 size-3.5 sm:mr-1.5 sm:size-6" />
          How to Get Tickets?
        </button>
      </div>
      <div className="-mt-4 flex h-1/2 w-full grow-[0.5] items-center justify-center">
        {showTeamPass ? (
          <motion.div className="flex flex-col items-center justify-center animate-fadeIn">
            <TeamPass className="scale-50 duration-500 ease-in-out hover:scale-[0.52] active:scale-[1.02] sm:scale-90 sm:hover:scale-[0.92] md:scale-100 md:hover:scale-[1.02]" />
            <button className="-mt-6 rounded-full border-2 border-white/40 bg-white/20 px-6 py-1.5 tracking-tight text-white backdrop-blur-sm hover:bg-white/25 sm:mt-2 sm:px-10 sm:py-2.5 md:mt-8">
              Register
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col gap-10 md:flex-row lg:gap-24"
            animate={collide ? { x: 0, y: 0, scale: 1.2, opacity: 0 } : {}}
          >
            {([1, 2] as const).map((num) => (
              <motion.div
                key={num}
                className={cn(
                  "relative flex aspect-[4/3] w-[320px] items-center gap-6 rounded-3xl border-2 p-6 backdrop-blur-sm sm:p-10 lg:w-[440px] transition-all duration-500",
                  num === 1 && claimedTicket1 && "ticket-claimed-left",
                  num === 2 && claimedTicket2 && "ticket-claimed-right",
                  num === 1 && whirlpoolAnimation && "animate-whirlpoolLeft",
                  num === 2 && whirlpoolAnimation && "animate-whirlpoolRight",
                  collide && (num === 1 ? "animate-collideLeft" : "animate-collideRight")
                )}
              >
                <div className="flex h-full w-full flex-col items-center justify-center gap-3.5 sm:gap-6">
                  {num === 1 && claimedTicket1 || num === 2 && claimedTicket2 ? (
                    <>
                      {num === 1 ? <Figma className="text-white w-20 h-20" /> : <Settings className="text-white w-20 h-20" />}
                      <div className="absolute bottom-4 text-white text-sm">Expiring in 1 days 23 hours</div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-center text-4xl tracking-tighter text-white sm:text-5xl lg:text-6xl">
                        Ticket {num}
                      </h2>
                      <input
                        className="w-full rounded-2xl border-2 border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur-sm"
                        placeholder="Fill Your Ticket Code Here"
                        value={num === 1 ? ticket1 : ticket2}
                        onChange={(e) => num === 1 ? setTicket1(e.target.value) : setTicket2(e.target.value)}
                        disabled={num === 1 ? claimedTicket1 : claimedTicket2}
                      />
                      <button
                        className="border-white/20 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full"
                        onClick={() => handleClaimTicket(num)}
                        disabled={num === 1 ? claimedTicket1 : claimedTicket2}
                      >
                        {num === 1 && claimedTicket1 || num === 2 && claimedTicket2 ? "Ticket Claimed" : "Claim Ticket"}
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}