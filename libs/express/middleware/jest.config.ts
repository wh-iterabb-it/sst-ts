import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "json"],
  watchPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testRegex: ".*\\.test\\.tsx?$",
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  // setupFilesAfterEnv: ['./tests/bootstrap.ts']
};
export default config;
