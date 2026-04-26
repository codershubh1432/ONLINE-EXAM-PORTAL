require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected");

    // ❗ OPTIONAL: Clear old data (run only once if needed)
    await Question.deleteMany();

    await Question.insertMany([
      //  MCA  TEST
      {
        exam: "mca",
        question: "A bag contains 4 red and 6 black balls. Three balls are drawn at random without replacement. What is the probability that the third ball is red, given that the first two drawn were of the same color?",
        options: ["1/3", "3/8", "4/9", "2/5"],
        correctAnswer: "3/8"
      },
      {
        exam: "mca",
        question: "What is the output of the following C code: int a[]={10,20,30,40}; int *p=a; printf('%d', *(p++) + *(++p));",
        options: ["40", "50", "60", "Garbage Value"],
        correctAnswer: "40"
      },

      
      {
        exam: "mca",
        question: "In Round Robin scheduling with 'n' processes and time quantum 'q', what is the maximum waiting time for a process?",
        options: ["n * q", "(n-1) * q", "(n+1) * q", "q^n"],
        correctAnswer: "(n-1) * q"
      },
      {
        exam: "mca",
        question: "Find the equation of a circle passing through the origin with intercepts 3 and 4 on the positive x and y axes respectively.",
        options: ["x² + y² - 3x - 4y = 0", "x² + y² + 3x + 4y = 0", "x² + y² - 6x - 8y = 0", "x² + y² - 4x - 3y = 0"],
        correctAnswer: "x² + y² - 3x - 4y = 0"
      },
      {
        exam: "mca",
        question: "In how many ways can the letters of the word 'APPLE' be arranged?",
        options: ["120", "60", "24", "100"],
        correctAnswer: "60"
      },
      {
        exam: "mca",
        question: "If a + b = 10 and ab = 21, find the value of a² + b².",
        options: ["58", "42", "100", "79"],
        correctAnswer: "58"
      },
      {
        exam: "mca",
        question: "Pointing to a man in a photograph, a woman said, 'His mother's only daughter is my mother.' How is the woman related to the man?",
        options: ["Sister", "Niece", "Mother", "Wife"],
        correctAnswer: "Niece"
      },
      {
        exam: "mca",
        question: "Which data structure is used to convert an Infix expression to a Postfix expression?",
        options: ["Queue", "Tree", "Stack", "Graph"],
        correctAnswer: "Stack"
      },
      {
        exam: "mca",
        question: "What is the decimal equivalent of the octal number (127)₈?",
        options: ["87", "95", "107", "79"],
        correctAnswer: "87"
      },
      {
        exam: "mca",
        question: "In the context of Databases, what does 'ACID' properties stand for?",
        options: [
          "Atomicity, Consistency, Isolation, Durability", 
          "Access, Control, Integrity, Direct", 
          "Algorithm, Computation, Input, Data", 
          "None of the above"
        ],
        correctAnswer: "Atomicity, Consistency, Isolation, Durability"
      },

      
      {
        exam: "mca",
        question: "What is the 2's complement of the binary number 101100?",
        options: ["010011", "010100", "110011", "010101"],
        correctAnswer: "010100"
      },
      {
        exam: "mca",
        question: "If CLOCK is coded as 31215311, how is WATCH coded?",
        options: ["2312038", "2312138", "2312039", "2312048"],
        correctAnswer: "2312038"
      },
      {
        exam: "mca",
        question: "Which of the following is a non-volatile memory?",
        options: ["RAM", "L2 Cache", "ROM", "Registers"],
        correctAnswer: "ROM"
      },
      {
        exam: "mca",
        question: "If logₓ 25 = 2, then what is the value of x?",
        options: ["2", "5", "10", "25"],
        correctAnswer: "5"
      },
      {
        exam: "mca",
        question: "Choose the synonym for 'Abundant':",
        options: ["Rare", "Plentiful", "Scant", "Minimal"],
        correctAnswer: "Plentiful"
      },
      {
        exam: "mca",
        question: "Which OSI layer is responsible for IP addressing and routing?",
        options: ["Transport", "Data Link", "Network", "Physical"],
        correctAnswer: "Network"
      },
      {
        exam: "mca",
        question: "Complete the series: 2, 6, 12, 20, 30, ?",
        options: ["40", "42", "44", "46"],
        correctAnswer: "42"
      },
      {
        exam: "mca",
        question: "1 Terabyte (TB) is equal to how many Gigabytes (GB)?",
        options: ["1024 MB", "1024 GB", "1000 KB", "1024 Bits"],
        correctAnswer: "1024 GB"
      },
      {
        exam: "mca",
        question: "Fill in the blank: 'He has been living here ___ 2010.'",
        options: ["For", "From", "Since", "By"],
        correctAnswer: "Since"
      },
      {
        exam: "mca",
        question: "What is the area of a triangle with base 10 cm and height 5 cm?",
        options: ["50 sq cm", "25 sq cm", "15 sq cm", "100 sq cm"],
        correctAnswer: "25 sq cm"
      },
      // Software development 
      {
  "exam": "software development",
  "question": "Which of the following is a popular JavaScript library for building user interfaces?",
  "options": ["React", "Django", "Laravel", "Spring"],
  "correctAnswer": "React"
},
      {
  "exam": "software development",
  "question": "What does HTML stand for?",
  "options": [
    "Hyperlinks and Text Markup Language",
    "Hyper Text Markup Language",
    "Home Tool Markup Language",
    "Highly Textured Modern Language"
  ],
  "correctAnswer": "Hyper Text Markup Language"
},
{
  "exam": "software development",
  "question": "In Git, which command is used to save changes to the local repository?",
  "options": ["git push", "git pull", "git commit", "git save"],
  "correctAnswer": "git commit"
},
{
  "exam": "software development",
  "question": "Which data structure follows the Last-In-First-Out (LIFO) principle?",
  "options": ["Queue", "Array", "Stack", "Linked List"],
  "correctAnswer": "Stack"
},
{
  "exam": "software development",
  "question": "What is the primary purpose of CSS in web development?",
  "options": ["Database management", "Server-side logic", "Styling and layout", "Defining document structure"],
  "correctAnswer": "Styling and layout"
},
{
  "exam": "software development",
  "question": "Which of these is NOT a programming language?",
  "options": ["Python", "Java", "JSON", "Ruby"],
  "correctAnswer": "JSON"
},
{
  "exam": "software development",
  "question": "What does 'SQL' stand for?",
  "options": [
    "Structured Query Language",
    "Strong Question Language",
    "Simple Query Layout",
    "Sequential Query List"
  ],
  "correctAnswer": "Structured Query Language"
},
{
  "exam": "software development",
  "question": "Which symbol is commonly used to denote an ID in CSS?",
  "options": [".", "#", "@", "$"],
  "correctAnswer": "#"
},
{
  "exam": "software development",
  "question": "What is the default port for HTTP?",
  "options": ["443", "21", "80", "8080"],
  "correctAnswer": "80"
},
{
  "exam": "software development",
  "question": "Which keyword is used to declare a constant variable in modern JavaScript?",
  "options": ["var", "let", "const", "constant"],
  "correctAnswer": "const"
},
{
  "exam": "software development",
  "question": "What is the purpose of a 'Middleware' in Express.js?",
  "options": [
    "To connect to the database directly",
    "To handle requests before they reach the route handler",
    "To compile the frontend React code",
    "To manage hardware resources"
  ],
  "correctAnswer": "To handle requests before they reach the route handler"
},
{
  "exam": "software development",
  "question": "What is a 'Pure Function' in functional programming?",
  "options": [
    "A function that only uses global variables",
    "A function that returns the same output for the same input and has no side effects",
    "A function that is defined inside a class",
    "A function that cannot be called more than once"
  ],
  "correctAnswer": "A function that returns the same output for the same input and has no side effects"
},
{
  "exam": "software development",
  "question": "In a relational database, what is a 'Foreign Key' used for?",
  "options": [
    "To uniquely identify a row in its own table",
    "To encrypt sensitive data",
    "To create a link between two tables",
    "To index the primary data"
  ],
  "correctAnswer": "To create a link between two tables"
},
{
  "exam": "software development",
  "question": "Which HTTP method is considered 'Idempotent'?",
  "options": ["POST", "GET", "PATCH", "CONNECT"],
  "correctAnswer": "GET"
},
{
  "exam": "software development",
  "question": "What does the 'Virtual DOM' do in React?",
  "options": [
    "It acts as a direct backup of the server's database",
    "It creates a lightweight copy of the real DOM to improve rendering performance",
    "It replaces the need for CSS entirely",
    "It handles the routing between different web pages"
  ],
  "correctAnswer": "It creates a lightweight copy of the real DOM to improve rendering performance"
},
{
  "exam": "software development",
  "question": "In the context of the Event Loop in Node.js, which phase executes callbacks for setImmediate()?",
  "options": ["Poll phase", "Check phase", "Timer phase", "Idle/Prepare phase"],
  "correctAnswer": "Check phase"
},
{
  "exam": "software development",
  "question": "What is the time complexity of searching for an element in a balanced Binary Search Tree (BST)?",
  "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
  "correctAnswer": "O(log n)"
},
{
  "exam": "software development",
  "question": "Which SOLID principle states that 'Software entities should be open for extension, but closed for modification'?",
  "options": [
    "Single Responsibility Principle",
    "Open/Closed Principle",
    "Liskov Substitution Principle",
    "Interface Segregation Principle"
  ],
  "correctAnswer": "Open/Closed Principle"
},
{
  "exam": "software development",
  "question": "What is 'Dependency Inversion' in software architecture?",
  "options": [
    "High-level modules should depend on low-level modules",
    "Both high and low-level modules should depend on abstractions",
    "Removing all dependencies from a project",
    "Inverting the order of function execution"
  ],
  "correctAnswer": "Both high and low-level modules should depend on abstractions"
},
{
  "exam": "software development",
  "question": "In MongoDB, what is the purpose of the 'Aggregation Framework'?",
  "options": [
    "To handle user authentication",
    "To perform multi-stage data processing and transformation",
    "To automatically back up the database",
    "To create a schema for the NoSQL collections"
  ],
  "correctAnswer": "To perform multi-stage data processing and transformation"
},
 //  Communication Skill TEST
    {
    "exam": "English Communication Skill",
    "question": "Which of the following is an example of 'Non-verbal' communication?",
    "options": [
      "Sending an email",
      "Body language and facial expressions",
      "Speaking on a telephone",
      "Writing a formal report"
    ],
    "correctAnswer": "Body language and facial expressions"
  },
  {
    "exam": "English Communication Skill",
    "question": "What does the '7 Cs' of communication stand for in a professional context?",
    "options": [
      "Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous",
      "Calculate, Concise, Change, Correct, Control, Calm, Clear",
      "Create, Connect, Communicate, Change, Code, Chat, Click",
      "None of the above"
    ],
    "correctAnswer": "Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous"
  },
  {
    "exam": "English Communication Skill",
    "question": "In active listening, what is 'Paraphrasing'?",
    "options": [
      "Interrupting the speaker to give your opinion",
      "Repeating exactly what the speaker said word-for-word",
      "Restating the speaker's message in your own words to confirm understanding",
      "Ignoring the speaker's emotional tone"
    ],
    "correctAnswer": "Restating the speaker's message in your own words to confirm understanding"
  },
  {
    "exam": "English Communication Skill",
    "question": "What is a 'Communication Barrier'?",
    "options": [
      "A tool used to speed up communication",
      "Anything that prevents the receiver from understanding the message",
      "A type of professional software",
      "The physical distance between two speakers"
    ],
    "correctAnswer": "Anything that prevents the receiver from understanding the message"
  },
  {
    "exam": "English Communication Skill",
    "question": "Which of these is the most appropriate 'Salutation' for a formal business letter to an unknown recipient?",
    "options": [
      "Hey there,",
      "To whom it may concern,",
      "Hi Team,",
      "What's up,"
    ],
    "correctAnswer": "To whom it may concern,"
  },
  {
    "exam": "English Communication Skill",
    "question": "What is 'Internal Communication' within an organization?",
    "options": [
      "Communication between the company and its customers",
      "Communication between employees and departments within the same company",
      "Communication between two different companies",
      "Communication via social media"
    ],
    "correctAnswer": "Communication between employees and departments within the same company"
  },
  {
    "exam": "English Communication Skill",
    "question": "What does 'Feedback' mean in the communication process?",
    "options": [
      "The noise that interrupts a conversation",
      "The response or reaction of the receiver to the sender's message",
      "The medium through which a message is sent",
      "The initial idea formed by the sender"
    ],
    "correctAnswer": "The response or reaction of the receiver to the sender's message"
  },
  {
    "exam": "English Communication Skill",
    "question": "Which of the following is a 'Closed-ended' question?",
    "options": [
      "How do you feel about this project?",
      "Can you describe your experience?",
      "Did you complete the assignment?",
      "What are your thoughts on the new policy?"
    ],
    "correctAnswer": "Did you complete the assignment?"
  },
  {
    "exam": "English Communication Skill",
    "question": "What is 'Intrapersonal' communication?",
    "options": [
      "Communication between two people",
      "Communication within oneself (internal thought process)",
      "Communication in a large group",
      "Communication via public speaking"
    ],
    "correctAnswer": "Communication within oneself (internal thought process)"
  },
  {
    "exam": "English Communication Skill",
    "question": "Which tone is most suitable for a professional email complaining about a service?",
    "options": [
      "Aggressive and insulting",
      "Polite but firm",
      "Sarcastic and humorous",
      "Vague and emotional"
    ],
    "correctAnswer": "Polite but firm"
  },
  {
    "exam": "English Communication Skill",
    "question": "What does 'Encoding' mean in communication?",
    "options": [
      "Interpreting a message received",
      "Translating an idea into a message or code for transmission",
      "Deleting an unwanted email",
      "Reading a book silently"
    ],
    "correctAnswer": "Translating an idea into a message or code for transmission"
  },
  {
    "exam": "English Communication Skill",
    "question": "What is 'Upward Communication'?",
    "options": [
      "Information flowing from subordinates to superiors",
      "Information flowing from managers to employees",
      "Communication between peers at the same level",
      "Communication with external vendors"
    ],
    "correctAnswer": "Information flowing from subordinates to superiors"
  },
  {
    "exam": "English Communication Skill",
    "question": "Which of these is a 'Semantic' barrier to communication?",
    "options": [
      "A loud construction site next door",
      "Poor internet connection",
      "Using technical jargon that the listener doesn't understand",
      "A person being in a bad mood"
    ],
    "correctAnswer": "Using technical jargon that the listener doesn't understand"
  },
  {
    "exam": "English Communication Skill",
    "question": "In a presentation, what is the 'Rule of Three'?",
    "options": [
      "Presenting for only three minutes",
      "Using only three colors on slides",
      "Grouping ideas in threes to make them more memorable",
      "Inviting only three people to the meeting"
    ],
    "correctAnswer": "Grouping ideas in threes to make them more memorable"
  },
  {
    "exam": "English Communication Skill",
    "question": "What is the primary goal of 'Persuasive' communication?",
    "options": [
      "To simply share data",
      "To entertain the audience",
      "To convince or influence the listener's beliefs or actions",
      "To hide information"
    ],
    "correctAnswer": "To convince or influence the listener's beliefs or actions"
  },
  {
    "exam": "English Communication Skill",
    "question": "What does 'Eye Contact' generally signal in Western business culture?",
    "options": [
      "Aggression and anger",
      "Confidence, honesty, and interest",
      "Boredom and distraction",
      "Submissiveness"
    ],
    "correctAnswer": "Confidence, honesty, and interest"
  },
  {
    "exam": "English Communication Skill",
    "question": "What is 'Grapevine' communication?",
    "options": [
      "Formal written reports",
      "Official company announcements",
      "Informal, unofficial communication/rumors within an organization",
      "Communication during a harvest festival"
    ],
    "correctAnswer": "Informal, unofficial communication/rumors within an organization"
  },
  {
    "exam": "English Communication Skill",
    "question": "Which of the following describes 'Empathy' in communication?",
    "options": [
      "Feeling sorry for someone",
      "Understanding and sharing the feelings of another person",
      "Agreeing with everything the other person says",
      "Ignoring the other person's perspective"
    ],
    "correctAnswer": "Understanding and sharing the feelings of another person"
  },
  {
    "exam": "English Communication Skill",
    "question": "What is a 'Chronemic' barrier?",
    "options": [
      "A barrier related to the use of time (e.g., being late or taking too much time)",
      "A barrier related to physical touch",
      "A barrier related to body scent",
      "A barrier related to clothing choices"
    ],
    "correctAnswer": "A barrier related to the use of time (e.g., being late or taking too much time)"
  },
  {
    "exam": "English Communication Skill",
    "question": "Which channel is best for delivering complex, technical instructions that need to be referred to later?",
    "options": [
      "A quick phone call",
      "A face-to-face chat",
      "A written manual or email",
      "An instant message (DM)"
    ],
    "correctAnswer": "A written manual or email"
  }
    ]);

    console.log("Data inserted successfully");
    process.exit();
  })
  .catch(err => console.log(err));