export interface Book {
  id: number;
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
  book_id: number;
  user_id: string;
  text: string;
  highlighted_content: string;
  page_number: number;
}

export interface ReadingListItem {
  id: number;
  book_id: number;
  course_code: string;
  department: string;
  added_by: string;
  date_added: string;
}

// Represents data from the public 'profiles' table, linked to auth.users
export interface User {
  id:string;
  name: string;
  student_id: string;
  email: string;
  university: string;
  department: string;
  semester: string;
  avatar_url: string;
  annotations: Annotation[]; // Kept for consistency, though a real implementation would fetch these separately.
}