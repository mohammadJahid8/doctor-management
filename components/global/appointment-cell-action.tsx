"use client";

import { Button } from "@/components/ui/button";

import { Printer, Trash,CheckCircle } from "lucide-react";
import { jsPDF } from "jspdf";
import { useAppContext } from "@/lib/context";
import api from "@/utils/axiosInstance";
import { toast } from "sonner";
import { EditAppointmentModal } from "./edit-appointment-modal";
import "jspdf-autotable";
export const AppointmentCellAction: React.FC<any> = ({ data }) => {
  const { setAppointmentRefetch, appointmentRefetch } = useAppContext();

  const handleMarkComplete = async () => {
    try {
      const response = await api.patch(`/appointment/complete/${data._id}`);
      if (response.status === 200) {
        toast.success("Appointment marked as complete", {
          position: "top-center",
        });
        setAppointmentRefetch(!appointmentRefetch);
      }
    } catch (err: any) {
      toast.error(
        err?.response?.data?.error || "Failed to complete appointment",
        { position: "top-center" }
      );
      console.error(err);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      const promise = await api.delete(`/appointment/delete/${id}`);
      if (promise.status === 200) {
        setAppointmentRefetch(!appointmentRefetch);

        toast.success(`Appointment deleted Successfully!`, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handlePrint = () => {
    // Set custom size: 58mm width (~2.28 inches), and height can be dynamic
    const doc: any = new jsPDF({
      unit: "mm",
      format: [58, 100], // Width = 58mm, Height = 100mm
    });

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Appointment", 29, 10, { align: "center" });

    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(`Doctor: ${data?.doctor?.name}`, 5, 20);
    doc.text(`Speciality: ${data?.doctor?.speciality}`, 5, 25);
    doc.text(`Hospital: ${data?.doctor?.hospitalName}`, 5, 30);

    doc.autoTable({
      startY: 35,
      head: [["Field", "Value"]],
      body: [
        ["Patient", data.patientName],
        ["Phone", data.phone],
        ["Next Visit", data.nextAppointmentDate],
        ["Fee", data.fee],
      ],
      styles: {
        fontSize: 7,
        halign: "center",
        cellPadding: 1,
      },
      theme: "grid",
      margin: { left: 2, right: 2 },
      headStyles: { fillColor: [22, 160, 133] },
    });

    doc.setFontSize(8);
    doc.text(
      "Thank you for choosing us!",
      29,
      doc.internal.pageSize.getHeight() - 5,
      { align: "center" }
    );

    doc.autoPrint();
    doc.output("dataurlnewwindow");
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        size="sm"
        className="h-7 text-xs bg-blue-600"
        disabled={data.status === "completed"}
        onClick={handleMarkComplete}
      >
        <CheckCircle className="mr-2 h-4 w-4" />
        {data.status === "completed" ? "Completed" : "Complete"}
      </Button>

      <Button
        size="sm"
        className="h-7 text-xs bg-green-600"
        onClick={handlePrint}
      >
        <Printer className="mr-2 h-4 w-4" /> Print
      </Button>

      <EditAppointmentModal data={data} />

      <Button
        variant="destructive"
        size="sm"
        className="h-7 text-xs"
        onClick={() => handleDelete(data._id)}
      >
        <Trash className="mr-2 h-4 w-4" /> Delete
      </Button>
    </div>
  );
};
