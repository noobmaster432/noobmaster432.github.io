import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Static HTML export. GitHub Pages serves files and cannot run a Next.js
   * server, so the build has to emit a self-contained `out/` directory.
   * Every route here already prerenders, so nothing is lost by exporting.
   */
  output: "export",

  /*
   * No basePath is set: the repository is named `noobmaster432.github.io`, so
   * Pages serves it from the domain root. Renaming the repo would turn it into
   * a project site served from `/<repo>/`, which would need `basePath` and
   * `assetPrefix` set to match or every asset would 404.
   */

  images: {
    /*
     * The image optimizer is a server feature and is unavailable on Pages, so
     * images ship exactly as they are committed. The screenshots and
     * illustrations are already compressed WebP. The resume preview is now
     * fetched straight from Drive by the browser, which is why `remotePatterns`
     * no longer applies and has been dropped.
     */
    unoptimized: true,
  },
};

export default nextConfig;
