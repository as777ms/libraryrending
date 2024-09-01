import { Canvas } from "@react-three/fiber";
import { UI } from "./ui";
import { Suspense, useEffect } from "react";
import { Experience } from "./experience";
import { Loader } from "@react-three/drei";
import Perevod from "../perevod/perevod";
import ThemeToggle from "../../ThemeToggle";
import { useAtom } from "jotai";
import { pageAtom, pages } from "./ui";

export default function Gether() {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    // Auto-page turn effect with delay
    let currentPage = 0;
    const pageTurnInterval = setInterval(() => {
      currentPage += 1;
      if (currentPage >= pages.length) {
        clearInterval(pageTurnInterval);
      } else {
        setPage(currentPage);
      }
    }, 1500); // Adjust the interval as needed

    return () => clearInterval(pageTurnInterval); // Cleanup on unmount
  }, [setPage]);

  return (
    <>
      <div style={{ zIndex: 9 }}>
        <UI />
      </div>
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }} style={{ zIndex: 0 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
      <div className="fixed top-0 left-0 z-20 pointer-events-auto">
        <ThemeToggle />
        <Perevod />
      </div>
      <Loader />
    </>
  );
}
