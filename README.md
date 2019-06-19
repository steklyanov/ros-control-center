#### Стек:
* Основная часть приложения написана на VueJS
* Для сборки использовался Vue-cli на базе Webpack
* Для хранения состояний Vuex

Список доступных страниц доступен в папке router
Все изменения состояний описанны в store
Отображения страниц в папке views
Основные компоненты содержатся в папке components

#### Components:

_NavBar_  
Постраничная навигация

_Settings_  
Изменение IP-адреса, мутация обьекта ROS из хранилища

_Joystic_  
Управление роботом посредством джойстика и с клавиатуры

_LidarMap_
* Отображение карты с лидара
* Сохранение карты
* Загрузка карты


Необходимо поставить следующие зависимости:
* [Vue][5]
* [Vue-Cli] [6]
* Nodejs
* npm
* [web_video_server][1]
* [nav2djs][2]
* [robot_pose_publisher][3]
* [rosbridge_suite][4]

###### Для запуска:

_На сервере(робот или своя машина):_

    git clone https://github.com/steklyanov/ros-control-center
    cd ros-control-center
    npm install
    node index.js
_На роботе:_   

    roslaunch rosbridge_server rosbridge_websocket.launch
    rosrun robot_pose_publisher robot_pose_publisher
    rosrun web_video_server web_video_server
    
[1]: https://github.com/RobotWebTools/web_video_server "web_video_server "
[2]: https://github.com/GT-RAIL/nav2djs "nav2djs"
[3]: https://github.com/GT-RAIL/robot_pose_publisher "robot_pose_publisher"
[4]: https://github.com/RobotWebTools/rosbridge_suite "rosbridge_suite"
[5]: https://ru.vuejs.org/v2/guide/installation.html "Vue"
[6]: https://cli.vuejs.org/ "Vue-Cli"