import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Dashboard</h1>
        <p>Dashboard masih dalam proses 🚧</p>
      </div>
    </div>
  );
}