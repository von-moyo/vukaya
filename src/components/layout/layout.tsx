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
        className="w-full overflow-y-auto scrollbar-none"
      >
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};


export { MainLayout }