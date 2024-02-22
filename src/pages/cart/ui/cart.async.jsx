import { lazy } from "react";

const CartAsync = lazy(() => import("./cart"));

export {CartAsync};