export const buildRoute = (
  template: string,
  params: Record<string, string | number>,
): string => {
  return Object.keys(params).reduce((route, key) => {
    return route.replace(`:${key}`, String(params[key]));
  }, template);
};

// Following are utility functions for logging
// no test case is required for these functions

const logObject = (data: object) => {
  for (const [key, value] of Object.entries(data)) {
    console.log(`${key}:${value}`);
  }
};
const logAdditionArgs = (additionalArgs: unknown[]) => {
  for (const arg of additionalArgs) {
    if (arg && typeof arg === 'object') {
      logObject(arg);
    } else console.log(arg);
  }
};

export const logDetails = ({
  message,
  additionalArgs,
}: {
  additionalArgs?: unknown[];
  message?: string | Error;
}): void => {
  console.log(`>>> Log Details Start >>>`);
  console.log(`Message >>>`, message);
  if (additionalArgs) {
    console.log(`>>> Additional arguments >>>`);
    logAdditionArgs(additionalArgs);
  }
  console.log(`>>> Log Details End >>>`);
};
