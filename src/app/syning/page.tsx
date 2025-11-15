import { nullid_works } from "@/data/exhibition";
import Image from "next/image";
import Link from "next/link";

export default function ExhibitionPage() {
  return (
    <div className="grid min-h-screen gap-6 py-12">
      <div className="relative min-h-[50vh]">
        <Image
          className="object-contain"
          src="/space.png"
          alt="my space"
          fill
        />
      </div>
      <div>
        <ol className="list-decimal grid gap-3 px-8 max-w-lg mx-auto">
          {nullid_works.map((item, key) => (
            <li className="flex justify-between" key={key}>
              {item.href ? (
                <Link
                  className="underline hover:text-blue-900"
                  href={item.href}
                  target="_blank"
                >
                  <p>{`${key + 1}. ${item.title}`}</p>
                </Link>
              ) : (
                <p>{`${key + 1}. ${item.title}`}</p>
              )}
              <p>{item.price}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
