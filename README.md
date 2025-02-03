# Dynamic Form Builder

This project is a **Dynamic Form Generator** built using React.js and Chakra UI, allowing users to upload form schemas in JSON format and generate customizable forms.

## Core Features

- **Upload JSON Schema:** Users can upload a JSON schema that defines the structure of the form.
- **Dynamic Form Rendering:** Based on the uploaded schema, forms are dynamically generated with various field types such as text, number, date, and more.
- **Supported Field Types:**
     - Text
     - Email
     - Password
     - Number
     - Date
     - Select (dropdown)
     - Radio buttons
     - Checkbox
     - Textarea
     - File upload
- **Form Validations:** Implemented validation rules for each field type (e.g., required fields, email format, min/max length, regex patterns). Displays error message for invalid fields and prevent form submission if validation fails.
- **Form Submission:** Form data is stored locally and can be retrieved later. Also displays form responses in JSON format.
- **Local Storage Persistence:** Form schemas and responses are stored in the browser’s local storage, enabling persistence across sessions.
- **Customizable UI:** Styled with Chakra UI for a clean and responsive design.

## Demo

You can view a live demo of the app [here](https://github.com/user-attachments/assets/0903db55-30d3-4bdf-89c2-088b37b2fb51).



## Technologies Used

- **React.js**: Frontend library to build the dynamic form components and manage the state.
- **Chakra UI**: A simple and customizable component library for React.
- **UUID**: To generate unique identifiers for form submissions.
- **LocalStorage**: To store form schema and responses persistently in the browser.
- **CSS**: For styling (using Chakra UI for UI components and some custom styles).

## Project Structure

```bash

dynamic-form-builder/
└── src/
    ├── components/
    │   ├── dynamicForm.js      # Handles dynamic form rendering based on schema
    │   ├── fileUpload.js       # Handles file upload and reading JSON schema
    │   ├── formList.js         # Displays list of previous form submissions
    │
    ├── constants/
    │   └── colors.js           # Defines color palette for the app
    │
    ├── pages/
    │   ├── homePage.js         # Home page for uploading form schema and displaying form list
    │   └── formPage.js         # Form page to render and submit the dynamic form
    │
    ├── App.js                  # Main app component to set up routing
    ├── index.js                # Main entry point for the app
    │
└── public/
    ├── index.html              # The HTML template for the app
    └── favicon.ico             # App favicon
└── .gitignore                  # Git ignore file
└── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
└── LICENSE                     # Project license

```

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm or yarn (recommended)

### Steps to Run the Project

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/dynamic-form-builder.git
    cd dynamic-form-builder
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Run the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

    This will start the app on `http://localhost:3000`.

## Usage

### 1. **Home Page**:
   - Upload a JSON file containing the form schema using the file upload component.
   - Once the schema is uploaded, the app will generate a dynamic form based on the schema.

### 2. **Form Page**:
- The form generated from the schema will be displayed.
- Users can fill in the form and submit the responses.
- Responses will be stored locally, and users can view previously submitted forms.

### 3. **Responses**:
  - To See responses, go back to Home page and click on "view response" button.

## Example JSON Schema

Here is an example of a simple form schema in JSON format: (mockData.json)

```json
{
  "formTitle": "User Registration Form",
  "formDescription": "user registration form description",
  "fields": [
    {
      "label": "Username",
      "type": "text",
      "required": true,
      "id": "username",
      "validation": {
        "minLength": 3,
        "maxLength": 20
      }
    },
    {
      "label": "Email",
      "type": "email",
      "required": true,
      "id": "email",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "label": "Password",
      "type": "password",
      "required": true,
      "id": "password",
      "validation": {
        "minLength": 8,

        "message": "Password must be at least 8 characters long"
      }
    },
    {
      "label": "Country",
      "type": "select",
      "options": [
        { "label": "India", "value": "india" },
        { "label": "USA", "value": "usa" },
        { "label": "UK", "value": "uk" }
      ],
      "required": false,
      "id": "country"
    },
    {
      "label": "Gender",
      "type": "radio",
      "options": [
        { "label": "Male", "value": "male" },
        { "label": "Female", "value": "female" },
        { "label": "Other", "value": "other" }
      ],
      "required": true,
      "id": "gender"
    },
    {
      "label": "Skills",
      "type": "checkbox",
      "options": [
        { "label": "React", "value": "react" },
        { "label": "Node.js", "value": "nodejs" },
        { "label": "Python", "value": "python" }
      ],
      "required": false,
      "id": "skills"
    },
    {
      "label": "Short Bio",
      "type": "textarea",
      "required": false,
      "id": "bio"
    },
    {
      "label": "Upload profile picture",
      "type": "file",
      "required": false,
      "id": "profilepicture"
    },
    {
      "label": "Date of Birth",
      "type": "date",
      "required": false,
      "id": "dob"
    }
  ]
}
{
  "formTitle": "User Registration Form",
  "formDescription": "user registration form description",
  "fields": [
    {
      "label": "Username",
      "type": "text",
      "required": true,
      "id": "username",
      "validation": {
        "minLength": 3,
        "maxLength": 20
      }
    },
    {
      "label": "Email",
      "type": "email",
      "required": true,
      "id": "email",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "label": "Password",
      "type": "password",
      "required": true,
      "id": "password",
      "validation": {
        "minLength": 8,

        "message": "Password must be at least 8 characters long"
      }
    },
    {
      "label": "Country",
      "type": "select",
      "options": [
        { "label": "India", "value": "india" },
        { "label": "USA", "value": "usa" },
        { "label": "UK", "value": "uk" }
      ],
      "required": false,
      "id": "country"
    },
    {
      "label": "Gender",
      "type": "radio",
      "options": [
        { "label": "Male", "value": "male" },
        { "label": "Female", "value": "female" },
        { "label": "Other", "value": "other" }
      ],
      "required": true,
      "id": "gender"
    },
    {
      "label": "Skills",
      "type": "checkbox",
      "options": [
        { "label": "React", "value": "react" },
        { "label": "Node.js", "value": "nodejs" },
        { "label": "Python", "value": "python" }
      ],
      "required": false,
      "id": "skills"
    },
    {
      "label": "Short Bio",
      "type": "textarea",
      "required": false,
      "id": "bio"
    },
    {
      "label": "Upload profile picture",
      "type": "file",
      "required": false,
      "id": "profilepicture"
    },
    {
      "label": "Date of Birth",
      "type": "date",
      "required": false,
      "id": "dob"
    }
  ]
}

```

