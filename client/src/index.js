import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import keycloak from "./keycloak";

keycloak.init({ onLoad: "login-required" }).then(authenticated => {
  if (authenticated) {
    console.log("🔐 Authenticated:", keycloak.token);
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App keycloak={keycloak} />);
  } else {
    console.warn("🛑 Not authenticated!");
  }
}).catch(error => {
  console.error("❌ Keycloak init error", error);
});
