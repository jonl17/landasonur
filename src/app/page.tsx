import Image from "next/image";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen w-full">
      <div>
        <Image
          src="/logo.jpg"
          alt="Landasonur forlag logo"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}
