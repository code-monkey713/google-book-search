const mongoose = require('mongoose');
const db = require('../models');

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// sample content to seed Book collection
const bookSeed = [
  {
    title: 'The Rust Programming Language (Covers Rust 2018)',
    authors: 'Steve Klabnik',
    description:
      "The official book on the Rust programming language, written by the Rust development team at the Mozilla Foundation, fully updated for Rust 2018. The Rust Programming Language is the official book on Rust: an open source systems programming language that helps you write faster, more reliable software. Rust offers control over low-level details (such as memory usage) in combination with high-level ergonomics, eliminating the hassle traditionally associated with low-level languages. The authors of The Rust Programming Language, members of the Rust Core Team, share their knowledge and experience to show you how to take full advantage of Rust's features--from installation to creating robust and scalable programs. You'll begin with basics like creating functions, choosing data types, and binding variables and then move on to more advanced concepts, such as: • Ownership and borrowing, lifetimes, and traits • Using Rust's memory safety guarantees to build fast, safe programs • Testing, error handling, and effective refactoring • Generics, smart pointers, multithreading, trait objects, and advanced pattern matching • Using Cargo, Rust's built-in package manager, to build, test, and document your code and manage dependencies • How best to use Rust's advanced compiler with compiler-led programming techniques You'll find plenty of code examples throughout the book, as well as three chapters dedicated to building complete projects to test your learning: a number guessing game, a Rust implementation of a command line tool, and a multithreaded server. New to this edition: An extended section on Rust macros, an expanded chapter on modules, and appendixes on Rust development tools and editions.",
    image:
      'http://books.google.com/books/content?id=qAOhDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    link:
      'https://play.google.com/store/books/details?id=qAOhDwAAQBAJ&source=gbs_api',
  },
  {
    title: 'JavaScript: The Good Parts',
    authors: 'Douglas Crockford',
    description:
      "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
    image:
      'http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    link:
      'https://play.google.com/store/books/details?id=PXa2bby0oQ0C&source=gbs_api',
  },
  {
    title: 'Eloquent JavaScript',
    authors: 'Marijn Haverbeke',
    description:
      'Provides information and examples on writing JavaScript code, covering such topics as syntax, control, data, regular expressions, and scripting.',
    image:
      'http://books.google.com/books/content?id=9U5I_tskq9MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    link:
      'http://books.google.com/books?id=9U5I_tskq9MC&dq=javascript&hl=&source=gbs_api',
  },
  {
    title: 'Eloquent JavaScript',
    authors: 'Marijn Haverbeke',
    description:
      'Diving deep into the JavaScript language to show you how to write beautiful, effective code, this book uses extensive examples and immerses you in code from the start, while exercises and full-chapter projects give you hands-on experience with writing your own programs. --',
    image:
      'http://books.google.com/books/content?id=p1v6DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    link:
      'http://books.google.com/books?id=p1v6DwAAQBAJ&dq=javascript&hl=&source=gbs_api',
  },
  {
    title: 'Automate the Boring Stuff with Python',
    authors: 'Al Sweigart',
    description:
      'If you’ve ever spent hours renaming files or updating hundreds of spreadsheet cells, you know how tedious tasks like these can be. But what if you could have your computer do them for you? In Automate the Boring Stuff with Python, you’ll learn how to use Python to write programs that do in minutes what would take you hours to do by hand—no prior programming experience required. Once you’ve mastered the basics of programming, you’ll create Python programs that effortlessly perform useful and impressive feats of automation to: –Search for text in a file or across multiple files –Create, update, move, and rename files and folders –Search the Web and download online content –Update and format data in Excel spreadsheets of any size –Split, merge, watermark, and encrypt PDFs –Send reminder emails and text notifications –Fill out online forms Step-by-step instructions walk you through each program, and practice projects at the end of each chapter challenge you to improve those programs and use your newfound skills to automate similar tasks. Don’t spend your time doing work a well-trained monkey could do. Even if you’ve never written a line of code, you can make your computer do the grunt work. Learn how in Automate the Boring Stuff with Python. Note: The programs in this book are written to run on Python 3.',
    image:
      'http://books.google.com/books/content?id=8AcvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    link:
      'https://play.google.com/store/books/details?id=8AcvDwAAQBAJ&source=gbs_api',
  },
  {
    title: 'Breaking Dawn',
    authors: 'Stephanie Meyer',
    description:
      'In the explosive finale to the epic romantic saga, Bella has one final choice to make. Should she stay mortal and strengthen her connection to the werewolves, or leave it all behind to become a vampire? When you loved the one who was killing you, it left you no options. How could you run, how could you fight, when doing so would hurt that beloved one? If your life was all you had to give, how could you not give it? If it was someone you truly loved? To be irrevocably in love with a vampire is both fantasy and nightmare woven into a dangerously heightened reality for Bella Swan. Pulled in one direction by her intense passion for Edward Cullen, and in another by her profound connection to werewolf Jacob Black, a tumultuous year of temptation, loss, and strife have led her to the ultimate turning point. Her imminent choice to either join the dark but seductive world of immortals or to pursue a fully human life has become the thread from which the fates of two tribes hangs. This astonishing, breathlessly anticipated conclusion to the Twilight Saga illuminates the secrets and mysteries of this spellbinding romantic epic. It\'s here! #1 bestselling author Stephenie Meyer makes a triumphant return to the world of Twilight with the highly anticipated companion, Midnight Sun: the iconic love story of Bella and Edward told from the vampire\'s point of view. "People do not want to just read Meyer\'s books; they want to climb inside them and live there." -- Time "A literary phenomenon." -- The New York Times',
    image:
      'http://books.google.com/books/content?id=kcsqGna7fBIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    link:
      'https://play.google.com/store/books/details?id=kcsqGna7fBIC&source=gbs_api',
  },
];

// creates the book collection with seed content
db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
