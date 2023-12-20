import { ComboboxDemo, data } from "@/components/combobox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { set } from "date-fns";
import { useState } from "react";
import SearchInput from "@/components/searchInput";
const ImageList = ({ user }) => {
  return user.map((u) => {
    return (
      <>
        <div className="group">
          <Avatar className="w-10 h-10 mx-1">
            <AvatarImage src={u.avatarLink} />
            <AvatarFallback className="w-10 h-10 border border-zinc-500">
              avatar
            </AvatarFallback>
          </Avatar>
          <div className="absolute bg-slate-600 text-white text-xs px-2 py-1 rounded z-20 hidden group-hover:block">
            {u.userName}
          </div>
        </div>
      </>
    );
  });
};
const ProjectCardHeader = ({ projectStatus, name, dailyStatus }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center">
          {projectStatus === "active" ? (
            <div className="relative group">
              <div className="flex items-center justify-center w-3 h-3 rounded-full bg-green-500"></div>
              <div className="absolute top-full left-3/4 w-36 transform -translate-x-1/2 bg-slate-600 text-white text-xs px-2 py-1 rounded opacity-0 z-50 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                This Project is Active
              </div>
            </div>
          ) : projectStatus === "pause" ? (
            <div className="relative group">
              <div className="flex items-center justify-center w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="absolute top-full left-3/4 w-36 transform -translate-x-1/2 bg-slate-600 text-white text-xs px-2 py-1 rounded opacity-0 z-50 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                This Project is Pausing
              </div>
            </div>
          ) : (
            <div className="relative group">
              <div className="flex items-center justify-center w-3 h-3 rounded-full bg-red-500"></div>
              <div className="absolute top-full left-3/4 w-36 transform -translate-x-1/2 bg-slate-600 text-white text-xs px-2 py-1 rounded opacity-0 z-50 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                This Project is Close
              </div>
            </div>
          )}
          <span className="block font-bold mb-1 ml-2">{name}</span>
        </div>
        <div className="font-medium">Daily Status: {dailyStatus}</div>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <>
      <span className="font-bold text-4xl">Home</span>

      <div className="flex">
        <div className="m-4">
          <ComboboxDemo data={data} subject={"Project"} />
        </div>
        <div className="m-4">
          <ComboboxDemo data={data} subject={"Employee"} />
        </div>
        <SearchInput />
      </div>
      <div className="flex flex-wrap">
        <Link
          href={`/projects/${"Trudy"}`}
          className="w-72 h-50 p-4 mx-4 mb-8 bg-slate-100 border border-zinc-500 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105 hover:border-zinc-900"
        >
          <ProjectCardHeader
            projectStatus={"active"}
            name={"Trudy"}
            dailyStatus={"8/11"}
          />
          <div className="flex mt-1 overflow-hidden items-center">
            <div className="">PM(3):</div>
            <ImageList
              user={[
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
                {
                  avatarLink: "https://github.com/hieudang2000.png",
                  userName: "Helo You",
                },
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
              ]}
            />
          </div>
          <div className="flex mt-1 overflow-hidden items-center">
            <div className="">Staff(8):</div>
            <ImageList
              user={[
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
                {
                  avatarLink: "https://github.com/hieudang2000.png",
                  userName: "Helo You",
                },
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
                {
                  avatarLink: "https://github.com/hieudang2000.png",
                  userName: "Helo You",
                },
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
              ]}
            />
          </div>
        </Link>
        <Link
          href={`/projects/${"RoundSafely"}`}
          className="w-72 h-50 p-4 mx-4 mb-8 bg-slate-100 border border-zinc-500 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105 hover:border-zinc-900"
        >
          <ProjectCardHeader
            projectStatus={"pause"}
            name={"RoundSafely"}
            dailyStatus={"4/5"}
          />
          <div className="flex mt-1 overflow-hidden items-center">
            <div className="">PM(2):</div>
            <ImageList
              user={[
                {
                  avatarLink: "https://github.com/hieudang2000.png",
                  userName: "Helo You",
                },
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
              ]}
            />
          </div>
          <div className="flex mt-1 overflow-hidden items-center">
            <div className="">Staff(8):</div>
            <ImageList
              user={[
                {
                  avatarLink: "https://github.com/hieudang2000.png",
                  userName: "Helo You",
                },
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
                {
                  avatarLink: "https://github.com/hieudang2000.png",
                  userName: "Helo You",
                },
              ]}
            />
          </div>
        </Link>
        <Link
          href={`/projects/${"Carbon Dioxide"}`}
          className="w-72 h-50 p-4 mx-4 mb-8 bg-slate-100 border border-zinc-500 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105 hover:border-zinc-900"
        >
          <ProjectCardHeader
            projectStatus={"close"}
            name={"Carbon Dioxide"}
            dailyStatus={"8/8"}
          />
          <div className="flex mt-1 overflow-hidden items-center">
            <div className="">PM(1):</div>
            <ImageList
              user={[
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
              ]}
            />
          </div>
          <div className="flex mt-1 overflow-hidden items-center">
            <div className="">Staff(7):</div>
            <ImageList
              user={[
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
                {
                  avatarLink: "https://github.com/hieudang2000.png",
                  userName: "Helo You",
                },
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
                {
                  avatarLink: "https://github.com/hieudang2000.png",
                  userName: "Helo You",
                },
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
                {
                  avatarLink: "https://github.com/shadcn.png",
                  userName: "Helo Me",
                },
              ]}
            />
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
