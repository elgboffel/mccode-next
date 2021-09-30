const compose = require("next-compose-plugins");
const path = require("path");

const nextConfig = {
  webpack: function (config, { dev, isServer }) {
    // // Fixes npm packages that depend on `fs` module
    // if (!isServer) {
    //   config.node = {
    //     fs: "empty",
    //   };
    // }
    /* Resolve alias */
    config.resolve.alias["~"] = path.resolve(`${__dirname}/src`);
    config.resolve.alias["@common"] = path.resolve(`${__dirname}/src/common`);
    config.resolve.alias["@components"] = path.resolve(
      `${__dirname}/src/components`
    );
    config.resolve.alias["@shared-components"] = path.resolve(
      `${__dirname}/src/common/shared-components`
    );
    config.resolve.alias["@styles"] = path.resolve(`${__dirname}/src/styles`);
    config.resolve.alias["@api"] = path.resolve(`${__dirname}/src/api`);

    /* Resolve Eslint */
    if (dev) {
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "eslint-loader",
        exclude: ["/node_modules/", "/.next/", "/out/"],
        enforce: "pre",
        options: {
          emitWarning: true,
          fix: true,
        },
      });
    }

    return config;
  },
  // i18n: {
  //   locales: ["en-US", "da"],
  //   defaultLocale: "en-US",
  // },
  target: "serverless",
  trailingSlash: false,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  images: {
    deviceSizes: [375, 576, 1040],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    iconSizes: [],
    domains: [],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/:slug*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "max-age=31536000",
  //         },
  //       ],
  //     },
  //   ];
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/en/home",
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = compose([], nextConfig);
