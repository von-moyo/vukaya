import { Outlet } from "react-router-dom";
import { Suspense, useRef } from "react";
import { Header } from "./header";

const MainLayout = () => {
  const scrollRef = useRef(null);

  return (
    <main className="">
      <Header />
      <div
        ref={scrollRef}
        className="w-full h-[calc(100dvh-90px)] mt-[90px] overflow-y-auto scrollbar-none border-t border-gray-200"
      >
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};


export { MainLayout }