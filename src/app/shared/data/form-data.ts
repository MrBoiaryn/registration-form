export const FORM_LOCATIONS = ['Ukraine', 'Europe', 'America', 'Other'];

export const FORM_CHECKBOXES = ['telegram', 'viber', 'watsapp', 'nothing'];

export const FORM_LABELS = {
  name: 'First name and last name',
  companyName: 'Company name',
  email: 'Email',
  password: 'Password',
  confirmPassword: 'Confirm password',
  tel: 'Phone number',
  checkboxes: 'Please select a method for feedback by number',
  location: 'Location',
  comment: 'Comment',
};

export const FORM_PLACEHOLDER = {
  name: 'First name and last name...',
  companyName: 'Company name...',
  email: 'Email...',
  password: 'Password...',
  confirmPassword: 'Confirm password...',
  tel: 'Phone number...',
  checkboxes: 'Select a method...',
  location: 'Select location...',
  comment: 'Comment...',
};

export const FORM_SUCCESS = {
  name: 'Success!',
  companyName: 'Success!',
  email: 'Success!',
  password: 'Success!',
  confirmPassword: 'Success!',
  tel: 'Success!',
  checkboxes: 'Success!',
  location: 'Success!',
  comment: 'Success!',
};

export const FORM_HELPID = {
  name: 'Enter your full name',
  companyName: 'Enter your company name',
  email: 'Enter your email for feedback',
  password: 'Enter your password',
  confirmPassword: 'Confirm your password',
  tel: 'Enter your phone number for feedback',
  checkboxes: 'You can choose several options',
  location: 'Select a location, if others, write in the comments',
  comment:
    'Here you can ask questions, give more information about company and the position, and do your offer',
};

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Name is required.',
    minlength: 'The name must consist of at least 3 characters.',
    maxlength: 'The name must consist of a maximum of 30 characters.',
  },
  companyName: {
    required: 'Company name is required.',
  },
  email: {
    required: 'Email is required.',
    emailValidator: 'Invalid email format.',
  },
  password: {
    required: 'Password is required.',
    minlength: 'Password must be at least 6 characters long.',
    maxlength: 'Password must not exceed 20 characters.',
  },
  confirmPassword: {
    required: 'Confirm password is required.',
    mustMatch: 'Passwords must match.',
  },
  tel: {
    required: 'Phone number is required.',
    pattern: 'Invalid phone number format.',
  },
  checkboxes: {
    required: 'At least one checkbox must be selected.',
  },
  location: {
    required: 'Location is required.',
  },
  comment: {
    required: 'Comment is required.',
  },
};

export const FORM_ERRORS = {
  name: '',
  companyName: '',
  email: '',
  password: '',
  confirmPassword: '',
  tel: '',
  checkboxes: '',
  location: '',
  comment: '',
};
