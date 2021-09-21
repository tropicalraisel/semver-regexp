/*
This is the officially recommended semver 2.0.0 regex that passes all the given tests.

All '\d' occurrences from the original have been replaced with '[0-9]'.
This version actually performs faster than the original.
*/

// https://regex101.com/r/QcBp0R/1
export default /^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)(?:-((?:0|[1-9][0-9]*|[0-9]*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9][0-9]*|[0-9]*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/gm;
