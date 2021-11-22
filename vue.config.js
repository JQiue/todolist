module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap(args => {
      console.log(args);
      args[0].title = 'ToDoList';
      return args;
    })
  }
}