import withAppLayout from "@/components/hoc/withAppLayout";
import { exportUsersList } from "@/pages/api/firebaseApi";

function Admin() {
  const handleExportUsersList = () => {
    exportUsersList();
  }
  return (
    <div className="w-full h-full flex items-center justify-center">
      <button
        className="btn btn-outline btn-accent"
        onClick={handleExportUsersList}
      >
        Export Users List
      </button>
    </div>
  );
}

export default withAppLayout(Admin);
