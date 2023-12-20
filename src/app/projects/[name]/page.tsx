"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import taskData from "@/constants";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
export default function Page({ params }: { params: { name: string } }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [progress, setProgress] = useState(100);
  useEffect(() => {
    setProgress(45);
  }, []);
  return (
    <>
      <div className="flex items-center my-4">
        <p className="text-2xl font-bold">{decodeURIComponent(params.name)}</p>
        <p className="ml-4">(Duration: startDate - end Date)</p>
      </div>
      <div className="p-4 border border-gray-300 rounded-md mt-8">
        <p className="pb-2 font-medium">Overview</p>
        <div className="flex items-center">
          <span className="min-w-[100px] mr-2">Daily Process:</span>

          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className={`w-[${progress}%] bg-black text-xs font-medium text-white text-center p-0.5 leading-none rounded-full`}
            >
              {`${progress}%`}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center content-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Tabs defaultValue="account" className="">
          <TabsList>
            <TabsTrigger value="account">Day</TabsTrigger>
            <TabsTrigger value="password">Week</TabsTrigger>
          </TabsList>
          <TabsContent value="account"></TabsContent>
          <TabsContent value="password"></TabsContent>
        </Tabs>
        <Button onClick={() => {
          setDate(new Date())
        }} type="submit" className="bg-green-700 ml-4">
          Today
        </Button>
      </div>
      <div className="p-4 border border-gray-300 rounded-md mt-8">
        <p className="mb-2 font-medium">{`Number of people not daily: ${4}`}</p>
        <p>
          {notDailyData.map(
            (u, index) => `${u}${index < notDailyData.length - 1 ? ", " : ""}`
          )}
        </p>
      </div>
      <div className="p-4 border border-gray-300 rounded-md mt-8">
        <div className="font-medium">{`Number of people have daily: ${6}`}</div>
        <TableView taskData={taskData} />
      </div>
    </>
  );
}
const notDailyData = ["Thanos", "Tony Start", "Black Widow", "Wonder Man"];
const TableView = ({ taskData }) => {
  return (
    <div className="mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300 rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Task Name</th>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Work Type</th>
            <th className="py-2 px-4 border-b">Note</th>
            <th className="py-2 px-4 border-b">Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((task, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-2 px-4 border-b">{task.username}</td>
              <td className="py-2 px-4 border-b">{task.taskName}</td>
              <td className="py-2 px-4 border-b">{task.time}</td>
              <td className="py-2 px-4 border-b">{task.status}</td>
              <td className="py-2 px-4 border-b">{task.workType}</td>
              <td className="py-2 px-4 border-b">{task.note}</td>
              <td className="py-2 px-4 border-b">{task.lastModified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
