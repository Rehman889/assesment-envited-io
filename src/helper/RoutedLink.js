import React from "react";

import { Events, Landing } from "./PageModules";

const routesLinks = {
  user: [
    { routeName: "/landpage", component: () => <Landing />, props: {} },
    { routeName: "/events", component: () => <Events />, props: {} },
  ],
};

export default routesLinks;
