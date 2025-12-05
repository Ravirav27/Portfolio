import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), #e0e7ff 0deg, #312e81 90deg)`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-blue-500 to-purple-500 text-white [--conic-position:from_70deg_at_center_bottom]"
        >
          <div
            className="absolute  w-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{
              height: "40px",
            }}
          />
          <div
            className="absolute  w-40 h-40 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 [mask-image:conic-gradient(from_45deg,transparent_50%,black)]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), #e0e7ff 0deg, #312e81 90deg)`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-blue-500 via-purple-500 to-pink-500 text-white [--conic-position:from_290deg_at_center_bottom]"
        >
          <div
            className="absolute w-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
            style={{
              height: "40px",
            }}
          />
          <div
            className="absolute w-40 h-40 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 [mask-image:conic-gradient(from_225deg,transparent_50%,black)]"
          />
        </motion.div>
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"
        />
        <div
          className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-30 backdrop-blur-md"
        />
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-20 blur-3xl"
        />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-3xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        />

        <div className="absolute inset-auto z-40 w-full h-full rounded-full  [mask-image:radial-gradient(33rem_33rem_at_center_center,white_0%,transparent_50%)]">
          <svg
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[43.35rem] w-[86.7rem] -translate-x-1/2 -translate-y-1/2"
          >
            <defs>
              <pattern
                id="d926d63b-4dd5-47c2-a110-8688e6905df8"
                width={200}
                height={200}
                x="50%"
                y="0%"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" stroke="rgba(0,0,0,0.1)" />
              </pattern>
            </defs>
            <svg x="50%" y="0%" className="overflow-visible fill-none">
              <path
                d="M0,0 C0,0 50,100 100,100 C150,100 200,0 200,0"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth={2}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#d926d63b-4dd5-47c2-a110-8688e6905df8)"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-50 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
