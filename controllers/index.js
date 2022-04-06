const router = require("express").Router();

const dashboardRoutes = require("./dashboard-routes.js");
const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");

router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/", homeRoutes);

module.exports = router;
