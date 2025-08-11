export interface Book {
  id: string;
  title: string;
  author: string;
  subject: string;
  cover_image: string;
  file_type: 'PDF' | 'EPUB';
  description: string;
  course_code: string;
  course_name: string;
  department: string;
  pages: number;
}

export interface Annotation {
  id: string;
  book_id: string;
  user_id: string;
  text: string;
  highlighted_content: string;
  page_number: number;
}

export interface ReadingListItem {
  id: string;
  book_id: string;
  course_code: string;
  department: string;
  added_by: string;
  date_added: string;
}

export interface User {
  id:string;
  name: string;
  student_id: string;
  email: string;
  university: string;
  department: string;
  semester: string;
  avatar_url: string;
  savedBooks: string[];
  annotations: Annotation[];
}