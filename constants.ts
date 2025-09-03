import type { Book } from './types';

export const ACADEMIC_DATA = [
    {
        name: 'Computer Science & Engineering',
        code: 'CSE',
        courses: [
            { code: 'CSE103', title: 'Structured Programming' },
            { code: 'CSE106', title: 'Discrete Mathematics' },
            { code: 'CSE110', title: 'Object Oriented Programming' },
            { code: 'CSE207', title: 'Data Structure' },
            { code: 'CSE209', title: 'Electric Circuit' },
            { code: 'CSE325', title: 'Operating System' },
        ],
    },
    {
        name: 'Business Administration',
        code: 'BBA',
        courses: [
            { code: 'BBA101', title: 'Principles of Management' },
            { code: 'BBA102', title: 'Financial Accounting' },
            { code: 'BBA205', title: 'Marketing Management' },
            { code: 'BBA210', title: 'Organizational Behavior' },
            { code: 'BBA320', title: 'Strategic Management' },
        ],
    },
    {
        name: 'Electrical and Electronic Engineering',
        code: 'EEE',
        courses: [
            { code: 'EEE101', title: 'Basic Electrical Engineering' },
            { code: 'EEE205', title: 'Circuit Theory' },
            { code: 'EEE210', title: 'Digital Electronics' },
            { code: 'EEE315', title: 'Power Systems' },
            { code: 'EEE322', title: 'Control Systems' },
        ],
    },
    {
        name: 'English',
        code: 'ENG',
        courses: [
            { code: 'ENG101', title: 'Introduction to Literature' },
            { code: 'ENG205', title: 'Advanced Composition' },
            { code: 'ENG210', title: 'Shakespeare Studies' },
            { code: 'ENG315', title: 'Literary Criticism' },
            { code: 'ENG320', title: 'Modern Poetry' },
        ],
    },
    {
        name: 'Pharmacy',
        code: 'PHAR',
        courses: [
            { code: 'PHAR101', title: 'Introduction to Pharmacy' },
            { code: 'PHAR110', title: 'Human Anatomy and Physiology' },
            { code: 'PHAR205', title: 'Pharmaceutical Chemistry' },
            { code: 'PHAR310', title: 'Pharmacology' },
            { code: 'PHAR405', title: 'Clinical Pharmacy' },
        ],
    },
    {
        name: 'LAW',
        code: 'LAW',
        courses: [
            { code: 'LAW101', title: 'Introduction to Law' },
            { code: 'LAW205', title: 'Constitutional Law' },
            { code: 'LAW210', title: 'Criminal Law' },
            { code: 'LAW315', title: 'International Law' },
            { code: 'LAW410', title: 'Corporate Law' },
        ],
    },
];

export const DEPARTMENTS = ACADEMIC_DATA.map(d => d.name);

export const ALL_COURSES = ACADEMIC_DATA.flatMap(d => d.courses.map(c => ({...c, department: d.name})));

// NOTE: The ALL_BOOKS constant is the primary source of truth for the book catalog in this application.
// It is used directly by all components to ensure high performance and offline availability.
export const ALL_BOOKS: Book[] = [
  // Computer Science & Engineering
  { id: 1, title: 'The C Programming Language', author: 'Brian W. Kernighan, Dennis M. Ritchie', subject: 'Computer Science & Engineering', cover_image: 'https://picsum.photos/seed/csproglang/400/300', file_type: 'PDF', description: 'A classic tutorial on the C programming language.', course_code: 'CSE103', course_name: 'Structured Programming', department: 'Computer Science & Engineering', pages: 288 },
  { id: 2, title: 'C Programming: A Modern Approach', author: 'K. N. King', subject: 'Computer Science & Engineering', cover_image: 'https://picsum.photos/seed/cmodern/400/300', file_type: 'PDF', description: 'A comprehensive guide to C programming, suitable for beginners and experienced programmers.', course_code: 'CSE103', course_name: 'Structured Programming', department: 'Computer Science & Engineering', pages: 832 },
  { id: 3, title: 'Discrete Mathematics and Its Applications', author: 'Kenneth H. Rosen', subject: 'Computer Science & Engineering', cover_image: 'https://picsum.photos/seed/discretemath/400/300', file_type: 'PDF', description: 'A focused introduction to the primary themes in a discrete mathematics course.', course_code: 'CSE106', course_name: 'Discrete Mathematics', department: 'Computer Science & Engineering', pages: 1071 },
  { id: 4, title: 'Java: The Complete Reference', author: 'Herbert Schildt', subject: 'Computer Science & Engineering', cover_image: 'https://picsum.photos/seed/javaref/400/300', file_type: 'PDF', description: 'A comprehensive guide to Java for programmers.', course_code: 'CSE110', course_name: 'Object Oriented Programming', department: 'Computer Science & Engineering', pages: 1248 },
  { id: 5, title: 'Head First Java', author: 'Kathy Sierra, Bert Bates', subject: 'Computer Science & Engineering', cover_image: 'https://picsum.photos/seed/headfirstjava/400/300', file_type: 'PDF', description: 'A brain-friendly guide to learning Java.', course_code: 'CSE110', course_name: 'Object Oriented Programming', department: 'Computer Science & Engineering', pages: 688 },
  { id: 6, title: 'Data Structures and Algorithms in Java', author: 'Robert Lafore', subject: 'Computer Science & Engineering', cover_image: 'https://picsum.photos/seed/dsajava/400/300', file_type: 'PDF', description: 'A comprehensive introduction to data structures and algorithms.', course_code: 'CSE207', course_name: 'Data Structure', department: 'Computer Science & Engineering', pages: 800 },
  { id: 7, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen, Charles E. Leiserson', subject: 'Computer Science & Engineering', cover_image: 'https://picsum.photos/seed/clrs/400/300', file_type: 'PDF', description: 'The bible of algorithms, a comprehensive textbook for any computer science student.', course_code: 'CSE207', course_name: 'Data Structure', department: 'Computer Science & Engineering', pages: 1312 },
  { id: 8, title: 'Fundamentals of Electric Circuits', author: 'Charles K. Alexander, Matthew N.O. Sadiku', subject: 'Computer Science & Engineering', cover_image: 'https://picsum.photos/seed/electriccircuits/400/300', file_type: 'PDF', description: 'A clear and concise text for the introductory circuits course.', course_code: 'CSE209', course_name: 'Electric Circuit', department: 'Computer Science & Engineering', pages: 976 },
  { id: 9, title: 'Operating System Concepts', author: 'Abraham Silberschatz, Peter B. Galvin', subject: 'Computer Science & Engineering', cover_image: 'https://picsum.photos/seed/osconcepts/400/300', file_type: 'PDF', description: 'A classic text on operating systems that provides a solid theoretical foundation.', course_code: 'CSE325', course_name: 'Operating System', department: 'Computer Science & Engineering', pages: 1104 },
  { id: 10, title: 'Modern Operating Systems', author: 'Andrew S. Tanenbaum', subject: 'Computer Science & Engineering', cover_image: 'https://picsum.photos/seed/modernos/400/300', file_type: 'PDF', description: 'An engaging and up-to-date introduction to operating systems.', course_code: 'CSE325', course_name: 'Operating System', department: 'Computer Science & Engineering', pages: 1136 },

  // Business Administration
  { id: 11, title: 'Management', author: 'Stephen P. Robbins, Mary A. Coulter', subject: 'Business Administration', cover_image: 'https://picsum.photos/seed/management/400/300', file_type: 'PDF', description: 'A foundational text covering the basic principles of management.', course_code: 'BBA101', course_name: 'Principles of Management', department: 'Business Administration', pages: 720 },
  { id: 12, title: 'The Principles of Scientific Management', author: 'Frederick Winslow Taylor', subject: 'Business Administration', cover_image: 'https://picsum.photos/seed/scientificmgmt/400/300', file_type: 'PDF', description: 'A seminal work on modern management and decision-making.', course_code: 'BBA101', course_name: 'Principles of Management', department: 'Business Administration', pages: 144 },
  { id: 13, title: 'Financial Accounting For Dummies', author: 'Steven Collings', subject: 'Business Administration', cover_image: 'https://picsum.photos/seed/acctdummies/400/300', file_type: 'PDF', description: 'An easy-to-understand guide to the basics of financial accounting.', course_code: 'BBA102', course_name: 'Financial Accounting', department: 'Business Administration', pages: 368 },
  { id: 14, title: 'Accounting Made Simple', author: 'Mike Piper', subject: 'Business Administration', cover_image: 'https://picsum.photos/seed/acctsimple/400/300', file_type: 'PDF', description: 'Explains accounting principles without technical jargon.', course_code: 'BBA102', course_name: 'Financial Accounting', department: 'Business Administration', pages: 120 },
  { id: 15, title: 'Principles of Marketing', author: 'Philip T. Kotler, Gary Armstrong', subject: 'Business Administration', cover_image: 'https://picsum.photos/seed/marketingpr/400/300', file_type: 'PDF', description: 'The most widely used textbook in marketing courses around the world.', course_code: 'BBA205', course_name: 'Marketing Management', department: 'Business Administration', pages: 736 },
  { id: 16, title: 'Organizational Behavior', author: 'Stephen P. Robbins, Timothy A. Judge', subject: 'Business Administration', cover_image: 'https://picsum.photos/seed/orgbehavior/400/300', file_type: 'PDF', description: 'A comprehensive resource on understanding and managing people at work.', course_code: 'BBA210', course_name: 'Organizational Behavior', department: 'Business Administration', pages: 744 },
  { id: 17, title: 'Strategic Management: Concepts and Cases', author: 'Fred R. David', subject: 'Business Administration', cover_image: 'https://picsum.photos/seed/strategicmgmt/400/300', file_type: 'PDF', description: 'A practical, skills-oriented approach to strategic management.', course_code: 'BBA320', course_name: 'Strategic Management', department: 'Business Administration', pages: 648 },
  { id: 18, title: 'Good to Great', author: 'Jim Collins', subject: 'Business Administration', cover_image: 'https://picsum.photos/seed/goodtogreat/400/300', file_type: 'PDF', description: 'Why some companies make the leap and others don\'t.', course_code: 'BBA320', course_name: 'Strategic Management', department: 'Business Administration', pages: 320 },

  // Electrical and Electronic Engineering
  { id: 19, title: 'Practical Electronics for Inventors', author: 'Paul Scherz, Simon Monk', subject: 'Electrical and Electronic Engineering', cover_image: 'https://picsum.photos/seed/practicalelec/400/300', file_type: 'PDF', description: 'A great starting point for aspiring electronics hobbyists and engineers.', course_code: 'EEE101', course_name: 'Basic Electrical Engineering', department: 'Electrical and Electronic Engineering', pages: 1056 },
  { id: 20, title: 'The Art of Electronics', author: 'Paul Horowitz, Winfield Hill', subject: 'Electrical and Electronic Engineering', cover_image: 'https://picsum.photos/seed/artofelec/400/300', file_type: 'PDF', description: 'A comprehensive and practical guide to analog and digital electronics.', course_code: 'EEE101', course_name: 'Basic Electrical Engineering', department: 'Electrical and Electronic Engineering', pages: 1220 },
  { id: 21, title: 'Electric Circuits', author: 'James W. Nilsson, Susan Riedel', subject: 'Electrical and Electronic Engineering', cover_image: 'https://picsum.photos/seed/nilssoncircuits/400/300', file_type: 'PDF', description: 'The most widely used introductory circuits textbook of the past 25 years.', course_code: 'EEE205', course_name: 'Circuit Theory', department: 'Electrical and Electronic Engineering', pages: 960 },
  { id: 22, title: 'Digital Design: With an Introduction to the Verilog HDL', author: 'M. Morris Mano, Michael D. Ciletti', subject: 'Electrical and Electronic Engineering', cover_image: 'https://picsum.photos/seed/digitaldesign/400/300', file_type: 'PDF', description: 'A classic text on the fundamentals of digital logic design.', course_code: 'EEE210', course_name: 'Digital Electronics', department: 'Electrical and Electronic Engineering', pages: 624 },
  { id: 23, title: 'Power System Analysis and Design', author: 'J. Duncan Glover, Thomas Overbye', subject: 'Electrical and Electronic Engineering', cover_image: 'https://picsum.photos/seed/powersystem/400/300', file_type: 'PDF', description: 'An introduction to power system analysis and design.', course_code: 'EEE315', course_name: 'Power Systems', department: 'Electrical and Electronic Engineering', pages: 768 },
  { id: 24, title: 'Modern Control Engineering', author: 'Katsuhiko Ogata', subject: 'Electrical and Electronic Engineering', cover_image: 'https://picsum.photos/seed/controleng/400/300', file_type: 'PDF', description: 'A comprehensive text on control systems engineering.', course_code: 'EEE322', course_name: 'Control Systems', department: 'Electrical and Electronic Engineering', pages: 928 },

  // English
  { id: 25, title: 'The Norton Anthology of English Literature', author: 'Stephen Greenblatt', subject: 'English', cover_image: 'https://picsum.photos/seed/nortonanthology/400/300', file_type: 'PDF', description: 'A comprehensive collection of English literature from the medieval period to the present.', course_code: 'ENG101', course_name: 'Introduction to Literature', department: 'English', pages: 3000 },
  { id: 26, title: 'How to Read Literature Like a Professor', author: 'Thomas C. Foster', subject: 'English', cover_image: 'https://picsum.photos/seed/readlikeaprof/400/300', file_type: 'PDF', description: 'A lively and entertaining introduction to the conventions of literature.', course_code: 'ENG101', course_name: 'Introduction to Literature', department: 'English', pages: 336 },
  { id: 27, title: 'The Elements of Style', author: 'William Strunk Jr., E. B. White', subject: 'English', cover_image: 'https://picsum.photos/seed/elementsofstyle/400/300', file_type: 'PDF', description: 'A classic guide to writing clear and concise English.', course_code: 'ENG205', course_name: 'Advanced Composition', department: 'English', pages: 105 },
  { id: 28, title: 'On Writing Well', author: 'William Zinsser', subject: 'English', cover_image: 'https://picsum.photos/seed/onwritingwell/400/300', file_type: 'PDF', description: 'A guide to writing non-fiction that has been praised for its sound advice and clarity.', course_code: 'ENG205', course_name: 'Advanced Composition', department: 'English', pages: 336 },
  { id: 29, title: 'The Complete Works of William Shakespeare', author: 'William Shakespeare', subject: 'English', cover_image: 'https://picsum.photos/seed/shakespeare/400/300', file_type: 'PDF', description: 'All of Shakespeare\'s plays and sonnets in a single volume.', course_code: 'ENG210', course_name: 'Shakespeare Studies', department: 'English', pages: 1264 },
  { id: 30, title: 'A Companion to Shakespeare', author: 'David Scott Kastan', subject: 'English', cover_image: 'https://picsum.photos/seed/shakespearecomp/400/300', file_type: 'PDF', description: 'A collection of essays providing a comprehensive overview of Shakespeare studies.', course_code: 'ENG210', course_name: 'Shakespeare Studies', department: 'English', pages: 544 },
  { id: 31, title: 'A History of Literary Criticism', author: 'M. A. R. Habib', subject: 'English', cover_image: 'https://picsum.photos/seed/litcriticismhist/400/300', file_type: 'PDF', description: 'A comprehensive history of literary criticism from antiquity to the present day.', course_code: 'ENG315', course_name: 'Literary Criticism', department: 'English', pages: 960 },
  { id: 32, title: 'The Waste Land', author: 'T. S. Eliot', subject: 'English', cover_image: 'https://picsum.photos/seed/wasteland/400/300', file_type: 'PDF', description: 'One of the most important poems of the 20th century.', course_code: 'ENG320', course_name: 'Modern Poetry', department: 'English', pages: 64 },

  // Pharmacy
  { id: 33, title: 'Remington: The Science and Practice of Pharmacy', author: 'Adeboye Adejare', subject: 'Pharmacy', cover_image: 'https://picsum.photos/seed/remington/400/300', file_type: 'PDF', description: 'The gold standard in pharmacy education.', course_code: 'PHAR101', course_name: 'Introduction to Pharmacy', department: 'Pharmacy', pages: 2360 },
  { id: 34, title: 'Human Anatomy & Physiology', author: 'Elaine N. Marieb, Katja Hoehn', subject: 'Pharmacy', cover_image: 'https://picsum.photos/seed/marieb/400/300', file_type: 'PDF', description: 'The #1 best-selling book for the human anatomy course.', course_code: 'PHAR110', course_name: 'Human Anatomy and Physiology', department: 'Pharmacy', pages: 1264 },
  { id: 35, title: 'Foye\'s Principles of Medicinal Chemistry', author: 'Thomas L. Lemke, David A. Williams', subject: 'Pharmacy', cover_image: 'https://picsum.photos/seed/foye/400/300', file_type: 'PDF', description: 'An acclaimed textbook that provides a comprehensive introduction to medicinal chemistry.', course_code: 'PHAR205', course_name: 'Pharmaceutical Chemistry', department: 'Pharmacy', pages: 1440 },
  { id: 36, title: 'Basic & Clinical Pharmacology', author: 'Bertram G. Katzung', subject: 'Pharmacy', cover_image: 'https://picsum.photos/seed/katzung/400/300', file_type: 'PDF', description: 'The most current, authoritative, and comprehensive pharmacology textbook.', course_code: 'PHAR310', course_name: 'Pharmacology', department: 'Pharmacy', pages: 1248 },
  { id: 37, title: 'Pharmacotherapy: A Pathophysiologic Approach', author: 'Joseph T. DiPiro, Gary C. Yee', subject: 'Pharmacy', cover_image: 'https://picsum.photos/seed/pharmacotherapy/400/300', file_type: 'PDF', description: 'A trusted resource for students and practitioners of pharmacotherapy.', course_code: 'PHAR405', course_name: 'Clinical Pharmacy', department: 'Pharmacy', pages: 2720 },
  { id: 38, title: 'Gray\'s Anatomy for Students', author: 'Richard Drake, A. Wayne Vogl', subject: 'Pharmacy', cover_image: 'https://picsum.photos/seed/grays/400/300', file_type: 'PDF', description: 'A clinically-oriented, student-friendly presentation of the classic anatomy text.', course_code: 'PHAR110', course_name: 'Human Anatomy and Physiology', department: 'Pharmacy', pages: 1176 },

  // LAW
  { id: 39, title: 'Introduction to the Study of Law', author: 'A. W. B. Simpson', subject: 'LAW', cover_image: 'https://picsum.photos/seed/introlaw/400/300', file_type: 'PDF', description: 'A classic introduction to the nature of law and legal reasoning.', course_code: 'LAW101', course_name: 'Introduction to Law', department: 'LAW', pages: 288 },
  { id: 40, title: 'Learning the Law', author: 'Glanville Williams', subject: 'LAW', cover_image: 'https://picsum.photos/seed/learninglaw/400/300', file_type: 'PDF', description: 'A guide for anyone thinking about a career in law.', course_code: 'LAW101', course_name: 'Introduction to Law', department: 'LAW', pages: 312 },
  { id: 41, title: 'Constitutional and Administrative Law', author: 'Alex Carroll', subject: 'LAW', cover_image: 'https://picsum.photos/seed/conlaw/400/300', file_type: 'PDF', description: 'A comprehensive and up-to-date guide to the principles of constitutional law.', course_code: 'LAW205', course_name: 'Constitutional Law', department: 'LAW', pages: 800 },
  { id: 42, title: 'Criminal Law: Text, Cases, and Materials', author: 'Jonathan Herring', subject: 'LAW', cover_image: 'https://picsum.photos/seed/crimlaw/400/300', file_type: 'PDF', description: 'A complete guide to criminal law.', course_code: 'LAW210', course_name: 'Criminal Law', department: 'LAW', pages: 960 },
  { id: 43, title: 'International Law', author: 'Malcolm N. Shaw', subject: 'LAW', cover_image: 'https://picsum.photos/seed/intllaw/400/300', file_type: 'PDF', description: 'The definitive and authoritative text on international law.', course_code: 'LAW315', course_name: 'International Law', department: 'LAW', pages: 1040 },
  { id: 44, title: 'Principles of Corporate Finance', author: 'Richard A. Brealey, Stewart C. Myers', subject: 'LAW', cover_image: 'https://picsum.photos/seed/corpfinlaw/400/300', file_type: 'PDF', description: 'A leading textbook on the theory and practice of corporate finance, relevant for corporate law.', course_code: 'LAW410', course_name: 'Corporate Law', department: 'LAW', pages: 944 },
  { id: 45, title: 'Blackstone\'s Statutes on Company Law', author: 'Derek French', subject: 'LAW', cover_image: 'https://picsum.photos/seed/blackstone/400/300', file_type: 'PDF', description: 'An essential resource for students of company law.', course_code: 'LAW410', course_name: 'Corporate Law', department: 'LAW', pages: 800 },
];
