import PageContainer from "@/components/global/page-container";
import { Reviews } from "@/components/global/reviews";
import React from "react";

const AdminReviewsPage = () => {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Reviews />
      </div>
    </PageContainer>
  );
};

export default AdminReviewsPage;
