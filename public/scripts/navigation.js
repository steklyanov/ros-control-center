// This scripts create basic frame with lidar data from move_base topic
// and send it to div container with "nav" id

function create_navigation() {
    // Create the main viewer.
    var viewer = new ROS2D.Viewer({
        divID : 'nav',
        width : 750,
        height : 800
    });
// Setup the nav client.
    var nav = NAV2D.OccupancyGridClientNav({
        ros : ros,
        rootObject : viewer.scene,
        viewer : viewer,
        continuous : true,
        tfClient   : '/tf',
        serverName : '/move_base',
        withOrientation: true
    });
}