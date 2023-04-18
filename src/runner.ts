import { spawnSync } from "child_process";
import { readFileSync } from "fs";

interface ThrottlerOptions {
  timeout?: number;
  args?: string[];
  debug?: boolean;
  cwd?: string;
  env?: NodeJS.ProcessEnv;
}

export class PerlThrottler {
  private timeout: number;
  private args: string[];
  private debug: boolean;
  private cwd?: string;
  private env?: NodeJS.ProcessEnv;

  constructor(options: ThrottlerOptions = {}) {
    this.timeout = options.timeout || 0;
    this.args = options.args || [];
    this.debug = options.debug || false;
    this.cwd = options.cwd;
    this.env = options.env;
    this.checkPerl();
  }

  public run(fileOrScript: string): string {
    let script: string;
    if (fileOrScript.endsWith(".pl") || fileOrScript.endsWith(".t")) {
      script = readFileSync(fileOrScript, "utf8");
    } else {
      script = fileOrScript;
    }
    const args = [...this.args];
    if (this.debug) {
      args.push("-d");
    }
    const options = {
      input: script,
      timeout: this.timeout,
      cwd: this.cwd,
      env: this.env,
    };
    const output = spawnSync("perl", args, options).stdout.toString().trim();
    return output;
  }

  private checkPerl() {
    const result = spawnSync("perl", ["-v"]).stdout.toString().trim();
    if (!result.includes("This is perl")) {
      throw new Error("Perl is not installed");
    }
  }
}
