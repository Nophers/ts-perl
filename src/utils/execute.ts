import { spawnSync } from "child_process";

/*
    * With this you can run a perl script directly from nodejs
    * @param {string} script - The script to run
    * @returns {string} - The output of the script
    * @example
    * const perlScript = 'kek.pl';
      const result = runPerl(perlScript);
      console.log(result);
*/
export function runPerl(script: string) {
  checkPerl();
  const output = spawnSync("perl", ["-e", script]).stdout.toString().trim();
  return output;
}

/*
 * Utilify function to check if perl is installed
 * @throws {Error} - If perl is not installed
 */
function checkPerl() {
  const result = spawnSync("perl", ["-v"]).stdout.toString().trim();
  if (!result.includes("This is perl")) {
    throw new Error("Perl is not installed");
  }
}
