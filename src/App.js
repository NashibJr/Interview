import React from "react";
import "./App.css";
import LoginModal from "./Modals/LoginModal";
import Homepage from "./pages/Homepage";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="max-w-[1786px] w-full app-container">
      <>
        <Homepage handleOpen={() => setOpen(true)} />
        <LoginModal open={open} handleClose={() => setOpen(false)} />
      </>
    </div>
  );
}

export default App;
