import Keycloak from "keycloak-js";

// Keycloak instance
const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "securaflow",          // your realm name
  clientId: "frontend"          // your client ID
});

export default keycloak;
