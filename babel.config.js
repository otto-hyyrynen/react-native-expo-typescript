module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            hooks: "./src/hooks",
            constants: "./src/constants",
            features: "./src/features",
            navigation: "./src/navigation",
            services: "./src/services",
            styles: "./src/styles",
          },
        },
      ],
    ],
  };
};
