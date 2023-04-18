use Email::Valid;

sub validate_email {
  my ($email) = @_;
  my $valid = Email::Valid->address($email);
  return $valid ? 1 : 0;
}

my $email = 'koni@gmail.com';
my $valid = validate_email($email);
if ($valid) {
  print "Email is valid

";
} else {
  print "Email is not valid
  
  ";
}