package StringUtils;

use strict;
use warnings;
use JSON;

use Exporter qw(import);
use Email::Valid;

our @EXPORT_OK = qw(validate_email title_case extract_dates extract_urls remove_non_ascii remove_consecutive_duplicates split_into_chunks truncate_string extract_between_delimiters anagram longest_palindrome longest_substring);

sub validate_email {
  my ($email) = @_;
  my $valid = Email::Valid->address($email);
  return $valid ? 1 : 0;
}

sub title_case {
    my ($str) = @_;
    $str =~ s/(\w+)/\u\L$1/g;
    return $str;
}

sub extract_dates {
    my ($str) = @_;
    my @dates = $str =~ /(?<!\d)(\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4})(?!\d)/g;
    return encode_json(\@dates);
}

sub remove_non_ascii {
  my ($str) = @_;
  $str =~ s/[^\x00-\x7F]+//g;
  return $str;
}

sub remove_consecutive_duplicates {
  my ($str) = @_;
  $str =~ s/(.)\1+/$1/g;
  return $str;
}

sub split_into_chunks {
    my ($str, $chunk_size) = @_;
    my @chunks = $str =~ /(.{1,$chunk_size})/gs;
    return \@chunks;
}

sub truncate_string {
    my ($str, $max_length, $suffix) = @_;
    $suffix = defined $suffix ? $suffix : '...';
    return substr($str, 0, $max_length - length($suffix)) . $suffix;
}

sub extract_between_delimiters {
    my ($str, $start_delim, $end_delim) = @_;
    my ($substr) = $str =~ /\Q$start_delim\E(.*?)\Q$end_delim\E/;
    return $substr;
}

sub anagram {
    my ($str1, $str2) = @_;
    my $sorted_str1 = join("", sort(split("", $str1)));
    my $sorted_str2 = join("", sort(split("", $str2)));
    return $sorted_str1 eq $sorted_str2;
}

sub longest_palindrome {
    my ($str) = @_;
    my $reverse = reverse($str);
    my $longest = '';
    for (my $i = 0; $i < length($str); $i++) {
        my $substr = substr($str, $i);
        if (length($substr) <= length($longest)) {
            last;
        }
        while ($substr =~ /(.).*?(?{$& eq $1 && length($&) > length($longest)})/g) {
            $longest = $&;
        }
        while ($reverse =~ /(.).*?(?{$& eq $1 && length($&) > length($longest)})/g) {
            $longest = $&;
        }
    }
    return $longest;
}

sub longest_substring {
    my ($str1, $str2) = @_;
    my @lcs;
    my $longest = '';
    for (my $i = 0; $i < length($str1); $i++) {
        for (my $j = 0; $j < length($str2); $j++) {
            my $k = 0;
            while (substr($str1, $i + $k, 1) eq substr($str2, $j + $k, 1)) {
                $k++;
                push(@lcs, substr($str1, $i, $k)) if $k > length($longest);
            }
        }
    }
    $longest = (sort { length($b) <=> length($a) } @lcs)[0];
    return $longest;
}

1;