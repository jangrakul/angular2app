"use strict";
var router_1 = require('@angular/router');
var task_detail_component_1 = require("./task-detail.component");
var task_list_component_1 = require("./task-list.component");
var taskRoutes = [
    {
        path: 'detail/:id',
        component: task_detail_component_1.TaskDetailComponent
    },
    {
        path: 'tasks',
        component: task_list_component_1.TaskListComponent
    },
];
exports.taskRouting = router_1.RouterModule.forChild(taskRoutes);
//# sourceMappingURL=task.routing.js.map