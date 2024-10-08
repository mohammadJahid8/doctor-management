"use client";
import { Separator } from "@/components/ui/separator";
import { getAppointmentColumns } from "./columns";
import { Heading } from "./heading";
import { DataTable } from "./data-table";
import { AddAppointmentModal } from "./add-appointment-modal";
import { useAppContext } from "@/lib/context";

export const Appointments: React.FC<any> = ({ data }) => {
  const { user } = useAppContext();

  return (
    <>
      <div className="flex sm:flex-row flex-col gap-4 items-start justify-between">
        <Heading
          title={`Appointments (${data.length})`}
          description="Manage Appointments"
        />

        {user?.role === "doctor" && <AddAppointmentModal />}
      </div>
      <Separator />
      <DataTable
        viewSearchKey="Next Appointment Date"
        searchKey="nextAppointmentDate"
        columns={getAppointmentColumns(user?.role)}
        data={data}
      />
    </>
  );
};
