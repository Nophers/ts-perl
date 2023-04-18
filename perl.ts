import { runPerl } from "./execute";

export class Perl {
  static run(script: string) {
    return runPerl(script);
  }

  static validateEmail(email: string) {
    const validateEmailScript = `
      use lib('.');
      require('./string_utils.pm');
      print StringUtils::validate_email('${email}');
    `;
    const emailIsValid = runPerl(validateEmailScript) === "1";
    return emailIsValid;
  }

  static titleCase(string: string) {
    const titleCaseScript = `
    use lib('.');
    require('./string_utils.pm');
    print StringUtils::title_case('${string}');
  `;
    const titleCasedString = runPerl(titleCaseScript);
    return titleCasedString;
  }

  static extractDates(string: string) {
    const extractdatesScript = `
    use lib('.');
    use JSON;
    require('./string_utils.pm');
    print StringUtils::extract_dates('${string}');
  `;
    const datesJSON = runPerl(extractdatesScript);
    const dates = JSON.parse(datesJSON);
    return dates;
  }

  static removeNonAscii(string: string) {
    const removenonasciiScript = `
    use lib('.');
    require('./string_utils.pm');
    print StringUtils::remove_non_ascii('${string}');
  `;
    const asciiString = runPerl(removenonasciiScript);
    return asciiString;
  }

  static removeConsecutiveDuplicates(string: string) {
    const remove_consecutive_duplicatesScript = `
    use lib('.');
    require('./string_utils.pm');
    print StringUtils::remove_consecutive_duplicates('${string}');
  `;
    const dedupedString = runPerl(remove_consecutive_duplicatesScript);
    return dedupedString;
  }

  static splitIntoChunks(string: string, chunkSize: number) {
    const split_into_chunksScript = `
    use JSON;
    use lib('.');
    require('./string_utils.pm');
    print encode_json(StringUtils::split_into_chunks('${string}', ${chunkSize}));
  `;
    const chunksJSON = runPerl(split_into_chunksScript);
    const chunks = JSON.parse(chunksJSON);
    return chunks;
  }

  static truncateString(string: string, maxLength: number, suffix: string) {
    const truncate_stringScript = `
    use lib('.');
    require('./string_utils.pm');
    print StringUtils::truncate_string('${string}', ${maxLength}, '${suffix}');
  `;
    const truncatedString = runPerl(truncate_stringScript);
    return truncatedString;
  }

  static extractBetweenDelimiters(
    str: string,
    startDelim: string,
    endDelim: string
  ) {
    const extract_between_delimitersScript = `
    use lib('.');
    require('./string_utils.pm');
    print StringUtils::extract_between_delimiters('${str}', '${startDelim}', '${endDelim}');
  `;
    const extractedString = runPerl(extract_between_delimitersScript);
    return extractedString;
  }

  static anagram(str1: string, str2: string) {
    const anagramScript = `
    use lib('.');
    require('./string_utils.pm');
    print StringUtils::anagram('${str1}', '${str2}');
  `;
    const isAnagram = runPerl(anagramScript);
    return isAnagram === "1";
  }

  static longestSubstring(str1: string, str2: string) {
    const longestSubstringScript = `
    use lib('.');
    require('./string_utils.pm');
    print StringUtils::longest_substring('${str1}', '${str2}');
  `;
    const longestSubstring = runPerl(longestSubstringScript);
    return longestSubstring;
  }
}
