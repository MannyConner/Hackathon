AppController = RouteController.extend({
    layoutTemplate: 'appLayout',
    fastRender: true
});

HomeController = AppController.extend({
    action: function () {
        this.render('home');
    }
});

DashboardMDController = AppController.extend({
    action: function () {
        this.render('dashboardMD');
    }
});

TriageController = AppController.extend({
    action: function () {
        this.render('dashboardTriage');
    }
});

PatientController = RouteController.extend({
    layoutTemplate: 'patientLayout',
    fastRender: true,
    action: function () {
        this.render('patient');
    }
});

NotificationController = RouteController.extend({
    layoutTemplate: 'patientLayout',
    fastRender: true,
    action: function () {
        this.render('responder');
    }
});

