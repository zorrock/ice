// iceworks events
module.exports = {
  /**
   * 工程任务监听事件定义
   */
  ICEWORKS_PROJECT_DEV_DATA: 'ICEWORKS_PROJECT_DEV_DATA', // dev 数据流
  ICEWORKS_PROJECT_BUILD_DATA: 'ICEWORKS_PROJECT_BUILD_DATA', // build 数据流
  ICEWORKS_PROJECT_LINT_DATA: 'ICEWORKS_PROJECT_LINT_DATA', // lint 数据流

  /**
   * 工程任务发出事件定义
   */
  ICEWORKS_PROJECT_DEV_START: 'ICEWORKS_PROJECT_DEV_START', // 启动 dev 命令
  ICEWORKS_PROJECT_DEV_STOP: 'ICEWORKS_PROJECT_DEV_STOP', // 停止 dev 命令
  ICEWORKS_PROJECT_BUILD_START: 'ICEWORKS_PROJECT_BUILD_START', // 启动 build 命令
  ICEWORKS_PROJECT_LINT_START: 'ICEWORKS_PROJECT_LINT_START', // 启动 lint 命令
};