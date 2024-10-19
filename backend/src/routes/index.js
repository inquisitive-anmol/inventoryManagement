const router = require("express").Router();

const routes = [
    {
        path: "/auth",
        route: require("./Auth.route")
    }
];

routes.forEach((curr) => {
    router.use(curr.path, curr.route);
}); 

module.exports = router;