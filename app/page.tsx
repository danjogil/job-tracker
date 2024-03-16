import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-24 px-4 flex flex-col items-center h-screen justify-end md:justify-between">
      <div className="grow flex justify-center items-center">
        <h2 className="uppercase font-bold xl:text-6xl lg:text-5xl z-20 md:text-4xl sm:text-3xl text-xl drop-shadow-md hidden md:block">
          Job Tracker
        </h2>
      </div>
      <div className="grow flex justify-center">
        <Image
          src="/images/desktop-bg.png"
          alt="Background Image"
          width={800}
          height={200}
          className="object-contain hidden md:block"
        />
        <Image
          src="/images/mobile-bg.png"
          alt="Background Image"
          fill
          className="object-contain z-10 absolute mt-[-50px] h-[80vh] block md:hidden"
        />
      </div>
      <div className="grow flex justify-center w-full">
        <Link
          href="/register"
          className="btn btn-outline bg-neutral-100 xl:btn-lg z-2 max-w-xs lg:max-w-sm shadow-md xl:max-w-md w-full font-bold"
        >
          Get Started
        </Link>
      </div>

      <div className="z-20 flex flex-col items-center font-bold text-3xl uppercase mb-5 md:hidden">
        <h2>Job Tracker</h2>
      </div>

      <Link
        href="/register"
        className="btn btn-outline bg-neutral-100 xl:btn-lg z-20 mb-12 md:mb-64 max-w-xs lg:max-w-sm shadow-md xl:max-w-md w-full font-bold flex md:hidden"
      >
        Get Started
      </Link>
    </div>
  );
}
