import { PerlThrottler } from "../runner";
import { Perl } from "../perl";

const runner = new PerlThrottler({
  timeout: 2000,
  args: ["-w"],
  debug: false,
  cwd: "/home/koni/Desktop/ts-perl/dist/",
  // env: { MY_VAR: "my value" },s
});

const email = "koni@gmail.com";
const validEmail = Perl.validateEmail(email);

const titleCase = "koni@dev.com";
const titleCasedString = Perl.titleCase(titleCase);

const perlScript = 'print "Working directory: ", `pwd`;';
const result = runner.run(perlScript);

console.log(validEmail);
console.log(titleCasedString);
console.log(result);
