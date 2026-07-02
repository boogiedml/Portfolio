import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { closeSetting } from "@/shared/store/features/appSettingSlice";
import { Home, Pos, Work } from "@/pages";
import { AppSettings } from "@/molecules";
import { ProjectLayout } from "@/templates";
import "../App.css";

function App() {
  const { theme } = useAppSelector((state) => state.theme);
  const { isOpened: appSettingIsOpened } = useAppSelector(
    (state) => state.appSetting
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const backgroundStyles: React.CSSProperties = {
    backgroundColor: theme === "dark" ? "#161616" : "#F9F9F9",
    backgroundImage:
      "url(https://kawsar.design/wp-content/uploads/2023/02/BG-Tx-1.svg)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  return (
    <>
      <div style={backgroundStyles} className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/" element={<Work />} />
          <Route
            path="/work/posxena/"
            element={
              <ProjectLayout>
                <Pos />
              </ProjectLayout>
            }
          />
        </Routes>
      </div>
      {appSettingIsOpened && (
        <AppSettings onClose={() => dispatch(closeSetting())} />
      )}
    </>
  );
}

export default App;
