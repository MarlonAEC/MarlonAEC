import React from "react";
import "./App.css";
import TwoColumnLayout from "./layouts/TwoColumnLayout";

const App = () => {
  return (
    <div className='container min-h-screen min-w-full'>
      <TwoColumnLayout>
        <TwoColumnLayout.LeftColumnContent>
          something
        </TwoColumnLayout.LeftColumnContent>
        <TwoColumnLayout.RightColumnContent>
          something to the rightColumnContent
        </TwoColumnLayout.RightColumnContent>
      </TwoColumnLayout>
    </div>
  );
};

export default App;
