const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const commentRoutes = require('./api/comment-routes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comments', commentRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
