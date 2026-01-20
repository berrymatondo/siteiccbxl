import { Clock, Users } from "lucide-react";

export default function HomeAltSchedule() {
  return (
    <div className="px-4 pt-6 max-w-4xl mx-auto">
      <h2 className="text-[#111318] dark:text-white text-[22px] font-bold leading-tight tracking-tight pb-4">
        Horaires des cultes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="hover:bg-blue-200 hover:cursor-pointer flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
          <div className="bg-[#135bec]/5 p-3 rounded-lg text-[#135bec]">
            <Clock className="h-6 w-6" />
          </div>
          <div className="flex flex-col gap-0.5 ">
            <h3 className="text-[#111318] dark:text-white text-base font-bold">
              Culte Dominical
            </h3>
            <p className="flex  gap-4 text-[#616f89] dark:text-gray-400 text-sm font-medium">
              <span>Dimanche </span>{" "}
              <strong className="flex flex-col">
                <span>• 09h00 - 11h00</span>
                <span>• 11h30 - 13h30</span>
              </strong>
            </p>
          </div>
        </div>
        <div className="hover:bg-blue-200 hover:cursor-pointer flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
          <div className="bg-[#135bec]/5 p-3 rounded-lg text-[#135bec]">
            <Users className="h-6 w-6" />
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-[#111318] dark:text-white text-base font-bold">
              Atmosphère de Prière
            </h3>
            <p className="text-[#616f89] dark:text-gray-400 text-sm font-medium">
              <strong>Vendredi • 19h00 - 20h15 </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
