import Header from "../components/Header";
import Navbar from "../components/navbar";

export default function MainLayout({ children }) {
  return (
    <div className="w-screen h-screen flex flex-col fixed">
      <div className="w-full flex h-[100vh]">
        <div className="w-[17%] h-screen">
          <Navbar />
        </div>
        <div className="flex w-[83%] flex-col h-screen">
          <div className="h-[10%]">
            <Header />
          </div>
          <div className="bg-[#fafafa] text-black h-[90%]">{children}</div>
        </div>
      </div>
    </div>
  );
}
