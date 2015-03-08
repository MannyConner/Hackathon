Router.configure({
    layoutTemplate: 'appLayout'
});

Router.route('/', function () {
    this.render('home'); }, {
    name: 'home',
    fastRender: true
});

Router.route('/dashboardTriage', function () {
    this.render('dashboardTriage'); }, {
    name: 'dashboardTriage',
    fastRender: true
});

Router.route('/dashboardMD', function () {
    this.render('dashboardMD'); }, {
    name: 'dashboardMD',
    fastRender: true
});

Router.route('/notification', function () {
    this.render('notification'); }, {
    name: 'notification',
    fastRender: true
});

Router.route('/notificationDetail', function () {
    this.render('notificationDetail'); }, {
    name: 'notificationDetail',
    fastRender: true
});