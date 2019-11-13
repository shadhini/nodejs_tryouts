// Movie app
// 2 users - emily, john

require('./emily');
require('./john');
// This prints both person's favourite movie as "The Notebook"
// though john hasn't set his favourite movie

// Whenever yiu use modules in NodeJS,
// the default behaviour is to share this module among every other file that imports it
// Here what emily and john get when importing movies is reference to the movies module, not copies of it
// Actually this might be the expected behaviour if this wasn't movies but a chat log.. as all wanna see the same chat log
// Also this behaviour is much better for performance and memory (lot faster and efficient)
// Bcz instead of every single different module making a copy they all just reference the same one
// But obviously in some applications this isn't the behaviour we want
// Object Factories can give Emily and John their own copy of this module


