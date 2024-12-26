import Splitter, { SplitDirection } from "@devbookhq/splitter";
// import TileOverflowX from '@devbookhq/splitter';
// import TileOverflowY from '@devbookhq/splitter';
import "./styles.css";
import BasicGroup from "./Button.jsx";
import {
  Box,
  Typography,
  Avatar,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { cpp } from "@codemirror/lang-cpp";

const Problems = () => {
  const location = useLocation();
  const { taskId } = location.state || {};
  const tasksData = [
    { id: 1, title: "Two Sum", difficulty: "Easy" },
    { id: 2, title: "Add Two Numbers", difficulty: "Medium" },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
    },
    { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard" },
  ];

  // Находим задачу по taskId
  const selectedTask = tasksData.find((task) => task.id === taskId);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1a1a1a",
        height: "100dvh",
        width: "100dvw",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <AppBar position="fixed" sx={{ backgroundColor: "#202020" }}>
        <Toolbar variant="dense" sx={{ padding: 0 }}>
          <Button ///Logo
            onClick={() => navigate("/ListTasks")}
            sx={{
              marginBottom: 0,
              backgroundColor: "#202020",
              color: "#ffffff",
            }}
          >
            <img src="/logo-full.png" alt="Logo" />
          </Button>
          <Typography ///расстояние между иконками
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="User" onClick={() => navigate("/Account")} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        style={{
          position: "fixed",
          top: "60px",
          width: "100dvw",
          height: "89dvh",
          flexDirection: "column",
          
        }}
      >
        {/* Верхняя панель с кнопками */}
        <Box
          sx={{
            position: "relative",
            marginBottom: "7px",
            height: "5dvh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <BasicGroup /> {/* Компонент с кнопками */}
        </Box>

        {/* Разделение контента на горизонтальные и вертикальные панели */}
        <Splitter gutterClassName="custom-gutter-horizontal" draggerClassName="custom-dragger-horizontal" minWidths={[150, 0]} direction={SplitDirection.Horizontal} TileOverflowY>
          {/* Левый блок с описанием задачи */}

          <div 
            style={{ 
              padding: "20px", 
              height: "100dvh", 
              backgroundColor: "#202020", 
              display: "flex", 
              flexDirection: "column",
              }}
            >

            <h3>Задача:</h3>
            {selectedTask ? (
              <p>
                {selectedTask.title} - {selectedTask.difficulty}
              </p>
            ) : (
              <p>Задача не найдена.</p>
            )}

          </div>
          {/* Правый блок с кодом и консолью */}
          <div
            style={{
              height: "100dvh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#202020"
              
            }}
          >
            <div className="flex items-center justify-between bg-dark-layer-2 h-11 w-full">
              <div className="flex items-center text-white">
                <button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
                  <div className="flex items-center px-1">
                    <div className="text-xs text-label-2 dark:text-dark-label-2">
                      C++
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <Splitter gutterClassName="custom-gutter-vertical" draggerClassName="custom-dragger-vertical" direction={SplitDirection.Vertical}>
              {/* Текстовое поле для написания кода */}

              <div>
                <CodeMirror
                  value="int main() {
    print('Hello, World!')
    return 0;
}"
                  theme={vscodeDark}
                  extensions={[cpp()]}
                  style={{ fontSize: 16 }}
                />
              </div>
              <div className="w-full px-5 overflow-auto">
                {/* testcase heading */}
                <div className="flex h-10 items-center space-x-6">
                  <div className="relative flex h-full flex-col justify-center cursor-pointer">
                    <div className="text-sm font-bold leading-5 text-white">
                      Testcase
                    </div>
                    <hr className="absolute bottom-0 h-0.5 w-16 rounded-full border-none bg-white" />
                  </div>
                </div>

                <div className="flex">

                  {/* case 1 */}
                  <div className="mr-2 items-start mt-2 text-white">
                    <div className="flex flex-wrap items-center gap-y-4">
                      <div className="font-medium items-center transition-all focus:outline-none inline-flex
                           bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg 
                          px-4 py-1 cursor-pointer whitespace-nowrap">
                        Case 1
                      </div>
                    </div>
                  </div>

                  {/* case 2 */}
                  <div className="mr-2 items-start mt-2 text-white">
                    <div className="flex flex-wrap items-center gap-y-4">
                      <div className="font-medium items-center transition-all focus:outline-none inline-flex
                           bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg 
                          px-4 py-1 cursor-pointer whitespace-nowrap">
                        Case 2
                      </div>
                    </div>
                  </div>

                  {/* case 3 */}
                  <div className="mr-2 items-start mt-2 text-white">
                    <div className="flex flex-wrap items-center gap-y-4">
                      <div className="font-medium items-center transition-all focus:outline-none inline-flex
                           bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg 
                          px-4 py-1 cursor-pointer whitespace-nowrap">
                        Case 3
                      </div>
                    </div>
                  </div>
                </div>

                <div className="font-semibold my-4">
                  <p className="text-sm font-medium mt-4 text-white">Input:</p>
                  <div className="w-full cursor-text rounded-lg border px-3 py-[10px]
                     bg-dark-fill-3 border-transparent text-white mt-2">
                    nums: [2, 7, 11, 15], target: 9
                  </div>
                  <p className="text-sm font-medium mt-4 text-white">Input:</p>
                  <div className="w-full cursor-text rounded-lg border px-3 py-[10px]
                     bg-dark-fill-3 border-transparent text-white mt-2">
                    [0, 1]
                  </div>
                </div>

              </div>
            </Splitter>
          </div>
        </Splitter>
      </Box>
    </Box>
  );
};

export default Problems;
