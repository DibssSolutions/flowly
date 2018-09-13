// Require all tasks in gulp/tasks, including subfolders
// process.env.DISABLE_NOTIFIER = true;
require('require-dir')('./gulp/tasks', {recurse: true});
