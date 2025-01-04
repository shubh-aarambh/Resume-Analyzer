# Resume Analyzer Web Application

This project is a **Resume Analyzer** web application that allows users to upload their resumes and receive a match score based on predefined job keywords. The tool highlights missing skills and provides suggestions to improve the resume for better job compatibility.

## Features
- Drag-and-drop resume upload.
- File format support for **PDF**, **DOC**, and **DOCX**.
- Automated skill matching based on job-related keywords.
- Visual feedback including match score, progress bar, and suggestions.
- Responsive design and modern UI/UX.

## Technologies Used
### Frontend
- **HTML5** for structure.
- **CSS3** for styling.
- **JavaScript (ES6)** for interactivity.

### Design
- Custom CSS animations.
- Interactive progress bar and upload zone.

## How It Works
1. **Uploading a Resume**:
   - Users can either drag and drop their resume or click the "Choose File" button to upload.
   - Only files with extensions `.pdf`, `.doc`, and `.docx` are accepted.
   - The upload zone visually indicates when a file is dragged over it.

2. **Handling the File**:
   - A mock analysis is performed by simulating a 1.5-second delay.
   - The mock data includes sample resume text and extracted skills.

3. **Analyzing the Resume**:
   - The uploaded resume is checked for matches with predefined job keywords: `javascript`, `react`, `node.js`, `api`, and `frontend`.
   - A match score is calculated based on the number of matching keywords.

4. **Displaying Results**:
   - The match score is displayed as a percentage.
   - A color-coded label indicates the match quality (Excellent, Good, Fair, Needs Improvement).
   - Missing skills are listed with suggestions on how to improve the resume.

## How to Run the Project
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/resume-analyzer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd resume-analyzer
   ```
3. Open the `index.html` file in your preferred web browser.

## File Structure
```plaintext
resume-analyzer/
├── index.html       # Main HTML file
├── style.css        # CSS file for styling
├── script.js        # JavaScript file for functionality
└── README.md        # Project documentation
```

## Customization
- To change the job keywords, update the `jobKeywords` array in `script.js`:
  ```javascript
  const jobKeywords = ['javascript', 'react', 'node.js', 'api', 'frontend'];
  ```
- To modify the appearance, edit the CSS variables in `style.css`:
  ```css
  :root {
    --primary: #2563eb;
    --secondary: #3b82f6;
    --accent: #60a5fa;
    --success: #22c55e;
    --background: #0f172a;
    --card: #1e293b;
    --text: #f8fafc;
  }
  ```

## Future Enhancements
- Real-time text extraction from uploaded files using a backend service.
- Enhanced keyword analysis using natural language processing (NLP).
- Dynamic addition of job roles and corresponding keywords.

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute it.

## Author
Developed by Shubh Shukla (https://github.com/shubh-aarambh).

