import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const KAROLINA_URL = "https://www.karolinafund.com/project/view/6559";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 items-center mt-12 h-screen w-full">
      <Image
        src="/bok-mocky.jpg"
        alt="Landasonur forlag logo"
        height={600}
        width={600}
      />
      <Link href={KAROLINA_URL} target="_blank" rel="noreferrer">
        <Button className="text-2xl" variant="link">
          Opna fjármögnun á Karolina Fund
          <ExternalLink />
        </Button>
      </Link>
      <div className="flex items-center">
        <p>Hafa samband:</p>
        <Link href="mailto:jglorange@gmail.com">
          <Button variant="link">jglorange@gmail.com</Button>
        </Link>
      </div>
    </div>
  );
}
