function MainController($scope, $http){
    console.log("MainController");
    $scope.client = {
        name: 'Chris Jankulovski',
        email: 'chrisj@remotestaff.com.au',
        id: 11
    };

    $scope.header_menu = [
        {
            name: 'Home',
            url: '/',
            sub: false,
            class: '',
        },
        {
            name: 'Productivity Reports',
            url: '#',
            class: 'kt-menu__item--submenu kt-menu__item--rel',
            sub: [
                {
                    name: 'Activity Tracker Notes',
                    url: '/activity_tracker_notes'
                },
                {
                    name: 'Screen Shot',
                    url: '/screenshots'
                },
                {
                    name: 'Application Usage',
                    url: '/active_apps'
                },
                {
                    name: 'Internet Usage',
                    url: '/internet_usage_reports'
                },
                {
                    name: 'Camera Shot Reports',
                    url: '/camshots'
                },
                {
                    name: 'Timesheets',
                    url: '/timesheets'
                },
                {
                    name: 'Staff Attendance',
                    url: '/staff_attendance'
                },
            ]
        },
        {
            name: 'Work Flow',
            url: '/work_flow',
            sub: false
        },
        {
            name: 'Contact Us',
            url: '/contact_us',
            sub: false
        },
        {
            name: 'Help',
            url: '#',
            class: 'kt-menu__item--submenu kt-menu__item--rel',
            sub: [
                {
                    name: 'FAQ',
                    url: '/faqs'
                },
                {
                    name: 'Complaints Handling',
                    url: '/complaints_handling'
                },
                {
                    name: 'Starter Kit',
                    url: '/client_starter_kit'
                }
            ]
        },
    ];

    $scope.side_menu = [
        {
            name: 'Staff',
            url: '/staff',
            icon: 'flaticon2-protection'
        },
        {
            name: 'Users',
            url: '/Users',
            icon: ''
        },
        {
            name: 'Leave Request',
            url: '/Leave',
            icon: ''
        },
        {
            name: 'Commission',
            url: '/Commission',
            icon: ''
        },
        {
            name: 'Invoice',
            url: '/Invoice',
            icon: ''
        },
        {
            name: 'Testimonials',
            url: '/Testimonials',
            icon: ''
        },
        {
            name: 'Job Ads',
            url: '/Ads',
            icon: ''
        }
    ];

    console.log($scope.header_menu)
    console.log($scope.side_menu)
}

App.controller('MainController',["$scope", "$http", MainController]);