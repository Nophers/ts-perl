declare module 'ts-perl' {
    export class Perl {
      static run(script: string): string;
      static validateEmail(email: string): boolean;
      static titleCase(string: string): string;
      static extractDates(string: string): string[];
      static removeNonAscii(string: string): string;
      static removeConsecutiveDuplicates(string: string): string;
      static splitIntoChunks(string: string, chunkSize: number): string[];
      static truncateString(string: string, maxLength: number, suffix: string): string;
      static extractBetweenDelimiters(str: string, startDelim: string, endDelim: string): string;
      static anagram(str1: string, str2: string): boolean;
      static longestSubstring(str1: string, str2: string): string;
    }
  
    export class PerlThrottler {
      constructor(options?: ThrottlerOptions);
      run(fileOrScript: string): string;
    }
  
    interface ThrottlerOptions {
      timeout?: number;
      args?: string[];
      debug?: boolean;
      cwd?: string;
      env?: NodeJS.ProcessEnv;
    }
  }