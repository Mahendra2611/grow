import Setting from "@/app/components/Settings";
import styles from "../../CustomScrollbarComponent.module.css";
import React from "react";

const page = () => {
  return (
    <div className={`p-6 overflow-y-scroll h-full ${styles.customScrollbar}`}>
      <Setting />
    </div>
  );
};

export default page;
