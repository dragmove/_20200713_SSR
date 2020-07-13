const isDevelopmentEnv = () => process.env.NODE_ENV !== 'production';

const isDebugMode = () => process.env.DEBUG === 'true';

const useExternalStyles = () => !isDevelopmentEnv.call(null);

module.exports = {
  isDevelopmentEnv,
  isDebugMode,
  useExternalStyles,
};
