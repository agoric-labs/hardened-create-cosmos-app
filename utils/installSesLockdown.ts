// execute upon import
(async () => {
  await import("ses"); // adds lockdown, harden, and Compartment
  const consoleTaming =
    process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
      ? "unsafe"
      : "safe";

  lockdown({
    errorTaming: "unsafe",
    overrideTaming: "severe",
    consoleTaming,
  });

  Error.stackTraceLimit = Infinity;

})();

export default function initiateLockdown() {
  return Promise.resolve();
}
