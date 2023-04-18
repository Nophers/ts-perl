import { Perl } from "../perl";
import { PerlThrottler } from "../runner";

const runner = new PerlThrottler({
  timeout: 2000,
  args: ["-w"],
  debug: false,
  cwd: "/home/koni/Desktop/ts-perl/dist/",
  env: { MY_VAR: "my value" },
});

const email = "koni@gmail.com";
const validEmail = Perl.validateEmail(email);

const anagram = Perl.anagram("listen", "silent");

const titleCase = "koni@dev.com";
const titleCasedString = Perl.titleCase(titleCase);

const perlScript = 'print "Working directory: ", `pwd`;';
const result = runner.run(perlScript);

console.log(validEmail);
console.log(titleCasedString);
console.log(result);
console.log(anagram);
