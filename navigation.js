function create_navigation(rbServer) {
    // Create the main viewer.
    var viewer = new ROS2D.Viewer({
        divID : 'nav',
        width : 750,
        height : 800
    });
// Setup the nav client.
    var nav = NAV2D.OccupancyGridClientNav({
        ros : rbServer,
        rootObject : viewer.scene,
        viewer : viewer,
        continuous : true,
        tfClient   : '/tf',
        serverName : '/move_base',
    });
}