import { ComboboxDemo, data } from "@/components/combobox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react";
export default function Home() {
  return (
    <>
      <span className="font-bold text-4xl">Home</span>

      <div className="flex">
        <div className="m-4">
          <ComboboxDemo data={data} subject={"Project"} />
        </div>
        <div className="m-4">
          <ComboboxDemo data={data} subject={"PM"} />
        </div>
        <Input id="name" className="m-4" placeholder={`Search`} />
      </div>
      <div className="flex flex-wrap">
        <Link
          href={`/projects/${43}`}
          className="w-72 h-40 p-4 mx-4 mb-8 bg-slate-100 border border-zinc-500 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105 hover:border-zinc-900"
        >
          <div className="flex ">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="w-20 h-20 border border-zinc-500">
                avatar
              </AvatarFallback>
            </Avatar>
            <div className="max-w-md ml-4">
              <span className="block font-bold mb-1">Project Name</span>
              <p className="line-clamp-2">
                PM: Thor Odinson, Hulk, Captain America
              </p>
            </div>
          </div>
          <div className="flex mt-1 overflow-hidden">
            <Avatar className="w-10 h-10 mx-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="w-10 h-10 border border-zinc-500">
                avatar
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 mx-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="w-10 h-10 border border-zinc-500">
                avatar
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 mx-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="w-10 h-10 border border-zinc-500">
                avatar
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 mx-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="w-10 h-10 border border-zinc-500">
                avatar
              </AvatarFallback>
            </Avatar>
          </div>
        </Link>
        <Link
          href={`/projects/${43}`}
          className="w-72 h-40 p-4 mx-4 mb-8 bg-slate-100 border border-zinc-500 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105 hover:border-zinc-900"
        >
          <div className="flex ">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://github.com/hieudang2000.png" />
              <AvatarFallback className="w-20 h-20 border border-zinc-500">
                avatar
              </AvatarFallback>
            </Avatar>
            <div className="max-w-md ml-4">
              <span className="block font-bold mb-1">Project Name</span>
              <p className="line-clamp-2">
                PM: Thor Odinson, Hulk, Captain America
              </p>
            </div>
          </div>
          <div className="flex mt-1 overflow-hidden">
            <Avatar className="w-10 h-10 mx-2">
              <AvatarImage src="https://github.com/hieudang2000.png" />
              <AvatarFallback className="w-10 h-10 border border-zinc-500">
                avatar
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 mx-2">
              <AvatarImage src="https://github.com/hieudang2000.png" />
              <AvatarFallback className="w-10 h-10 border border-zinc-500">
                avatar
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 mx-2">
              <AvatarImage src="https://github.com/hieudang2000.png" />
              <AvatarFallback className="w-10 h-10 border border-zinc-500">
                avatar
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 mx-2">
              <AvatarImage src="https://github.com/hieudang2000.png" />
              <AvatarFallback className="w-10 h-10 border border-zinc-500">
                avatar
              </AvatarFallback>
            </Avatar>
          </div>
        </Link>
        <div className="w-72 h-40 p-4 mx-4 mb-8 mb-8 bg-slate-100 border border-zinc-500 rounded-lg"></div>
        <div className="w-72 h-40 p-4 mx-4 mb-8 mb-8 bg-slate-100 border border-zinc-500 rounded-lg"></div>
        <div className="w-72 h-40 p-4 mx-4 mb-8 mb-8 bg-slate-100 border border-zinc-500 rounded-lg"></div>
        <div className="w-72 h-40 p-4 mx-4 mb-8 mb-8 bg-slate-100 border border-zinc-500 rounded-lg"></div>
        <div className="w-72 h-40 p-4 mx-4 mb-8 mb-8 bg-slate-100 border border-zinc-500 rounded-lg"></div>
        <div className="w-72 h-40 p-4 mx-4 mb-8 mb-8 bg-slate-100 border border-zinc-500 rounded-lg"></div>
        <div className="w-72 h-40 p-4 mx-4 mb-8 mb-8 bg-slate-100 border border-zinc-500 rounded-lg"></div>
      </div>
    </>
  );
}
