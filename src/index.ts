/*
This is the officially recommended semver 2.0.0 regex that passes all the given tests.

All '\d' occurrences from the original have been replaced with '[0-9]'.
This version actually performs faster than the original.
*/
const regex =
  /^((0|[1-9][0-9]*)\.){2}(0|[1-9][0-9]*)(?:-((?:0|[1-9][0-9]*|[0-9]*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9][0-9]*|[0-9]*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/gm;

export function isValidSemanticVersion(package_version: string): boolean {
  const match = package_version.match(regex);
  return (match && match.length === 1) || false;
}

export default function isValidVersion(package_version: string): boolean {
  let version = package_version;

  if (!version || version.length <= 0) return false;

  if (version[0].match(/~|\^|v$/)) version = version.slice(1);

  return isValidSemanticVersion(version);
}
