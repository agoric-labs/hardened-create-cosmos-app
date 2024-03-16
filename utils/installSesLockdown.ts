let lockdownstatus = false;

// execute upon import
(async () => {
  if (lockdownstatus) return;
  await import("ses"); // adds lockdown, harden, and Compartment
  console.log("Installing lockdown...");
  lockdown({
    errorTaming: "safe",
    overrideTaming: "moderate",
    consoleTaming: "unsafe",
    stackFiltering: "verbose",
    localeTaming: "unsafe",
  });
  lockdownstatus = true;
  console.log("SES lockdown installed...");
  Error.stackTraceLimit = Infinity;

  lockdownstatus = true;
})();

export default function initiateLockdown() {
  return Promise.resolve();
}
