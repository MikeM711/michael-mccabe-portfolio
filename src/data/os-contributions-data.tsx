const OSContributionsData = [
  {
    title: "web-ext: Enable extensions to load on android build variants",
    problem:
      "Bug: Mozilla's Android browser build variants were not directly supported by Mozilla's web-ext.",
    solution:
      "Logic was redefined for what a user-specified APK component should be evaluated to. An additional test was added to account for new logic and code coverage.",
    prUrl: "https://github.com/mozilla/web-ext/pull/1918",
    submittedCodeUrl: "https://github.com/mozilla/web-ext/pull/1918/files",
    tools: ["JavaScript", "Node.js"],
  },
  {
    title:
      "web-ext: Support for android build variants without requiring a fully qualified value",
    problem:
      "If a user wishes to test their Mozilla extension on an Android build variant, they must write a redundant CLI command.",
    solution:
      "A feature was introduced to allow condensed commands. Additional unit tests have been added.",
    prUrl: "https://github.com/mozilla/web-ext/pull/1941",
    submittedCodeUrl:
      "https://github.com/mozilla/web-ext/commit/c083c079ddad11031bfdf913852ea2e70f3d5ab3",
    tools: ["JavaScript", "Node.js"],
  },
  {
    title: "Add-ons Code Manager: Component layout fix",
    problem:
      "Bug: A particular component inside Mozilla's code manager was displayed incorrectly.",
    solution:
      "The offending display style affecting the layout was found and removed.",
    prUrl: "https://github.com/mozilla/addons-code-manager/pull/1605",
    submittedCodeUrl:
      "https://github.com/mozilla/addons-code-manager/pull/1605/files",
    tools: ["SCSS", "CSS"],
  },
];

export default OSContributionsData;
