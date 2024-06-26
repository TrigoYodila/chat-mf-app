import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Presentation from "chat_communication/Presentation"

import "./index.scss";
import { Layout } from "./Layout";
import { Inbox } from "./pages/Inbox/Inbox";

const App = () => (
  <Layout>
    <Routes>
      <Route path="" element={<Presentation />}/>
      <Route path=":conversationId" element={<Inbox />} />
    </Routes>
  </Layout>
);
ReactDOM.render(<BrowserRouter>
  <App />
</BrowserRouter>, 
document.getElementById("app")
);
