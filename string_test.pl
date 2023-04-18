use strict;
use warnings;
use JSON;

# Here you can find all of the written functions in pure Perl
# Uncomment one of the print statements to test the function
#                      vKxni - 4/15/2023  

sub title_case {
    my ($str) = @_;
    $str =~ s/(\w+)/\u\L$1/g;
    return $str;
}

# print title_case("hello world"); # Hello World

sub extract_dates {
    my ($str) = @_;
    my @dates = $str =~ /(?<!\d)(\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4})(?!\d)/g;
    return encode_json(\@dates);
}

# print extract_dates("[25th June 2023]"); # 2019-01-01

sub remove_non_ascii {
  my ($str) = @_;
  $str =~ s/[^\x00-\x7F]+//g;
  return $str;
}

# print remove_non_ascii("Fülöp Mülöp Dülöp"); # Flp Mlp Dlp

sub remove_consecutive_duplicates {
  my ($str) = @_;
  $str =~ s/(.)\1+/$1/g;
  return $str;
}

# print remove_consecutive_duplicates("Hallo wie geht es dir?"); # Halo wie geht es dir?

sub split_into_chunks {
    my ($str, $chunk_size) = @_;
    my @chunks = $str =~ /(.{1,$chunk_size})/gs;
    return \@chunks;
}

#print join(", ", @{split_into_chunks("Hello World", 3)}); # Hel, lo ,Wor, ld

sub truncate_string {
    my ($str, $max_length, $suffix) = @_;
    $suffix = defined $suffix ? $suffix : '...';
    return substr($str, 0, $max_length - length($suffix)) . $suffix;
}

#print truncate_string("Hello there how are you?", 7); # Hell...

sub extract_between_delimiters {
    my ($str, $start_delim, $end_delim) = @_;
    my ($substr) = $str =~ /\Q$start_delim\E(.*?)\Q$end_delim\E/;
    return $substr;
}

#print extract_between_delimiters("Hello World", "l", "d"); # lo Worl

sub anagram {
    my ($str1, $str2) = @_;
    my $sorted_str1 = join("", sort(split("", $str1)));
    my $sorted_str2 = join("", sort(split("", $str2)));
    return $sorted_str1 eq $sorted_str2;
}

# print anagram("listen", "silent"); # 1

sub longest_substring {
    my ($str1, $str2) = @_;
    my $longest = '';
    for (my $i = 0; $i < length($str1); $i++) {
        for (my $j = 0; $j < length($str2); $j++) {
            my $k = 0;
            while (substr($str1, $i + $k, 1) eq substr($str2, $j + $k, 1)) {
                $k++;
                last if ($i + $k >= length($str1) || $j + $k >= length($str2));
            }
            if ($k > length($longest)) {
                $longest = substr($str1, $i, $k);
            }
        }
    }
    return $longest;
}

#print longest_substring("Sitting", "Shitting"); # itting

1;