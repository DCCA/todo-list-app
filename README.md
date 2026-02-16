# To-Do List App

A simple, elegant to-do list application built with vanilla JavaScript and jQuery. This app allows users to manage their daily tasks with an intuitive interface and smooth animations.

## Features

- ✅ **Add Tasks**: Create new to-do items by typing and pressing Enter
- ✅ **Mark as Complete**: Click on any task to toggle completion status (line-through effect)
- ✅ **Delete Tasks**: Remove tasks by clicking the trash icon that appears on hover
- ✅ **Toggle Input**: Show/hide the input field with the "+" button
- ✅ **Smooth Animations**: Fade-in/out effects for better user experience
- ✅ **Responsive Design**: Clean, modern interface that works on different screen sizes

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with gradients, flexbox, and animations
- **JavaScript (ES6)**: Modern JavaScript features
- **jQuery 3.4.1**: DOM manipulation and event handling
- **Font Awesome**: Icon library for the trash icon
- **Google Fonts**: 
  - Roboto Mono (for body text)
  - Staatliches (for headers)

## Project Structure

```
todo-list-app/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── style.css           # Custom styles
├── css-reset.css       # CSS reset for consistent rendering
└── assets/
    └── favicon-f.ico   # Website favicon
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No additional installation or build tools required!

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DCCA/todo-list-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-list-app
   ```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser, or
   - Use a local server (optional):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

## Usage

1. **Add a new task**: 
   - Click the "+" button to show the input field (if hidden)
   - Type your task in the input field
   - Press Enter to add it to the list

2. **Mark a task as complete**: 
   - Click on any task to toggle its completion status
   - Completed tasks will have a line-through style

3. **Delete a task**: 
   - Hover over a task to reveal the red trash icon
   - Click the trash icon to remove the task from the list

4. **Hide the input field**: 
   - Click the "+" button to toggle the input field visibility

## Keyboard Shortcuts

- **Enter**: Add a new task (when input field is focused)

## Color Scheme

- Background: Gradient from dark blue (#020024) to teal (#75C8CE)
- Main container: Dark navy (#191929)
- Tasks: Alternating teal shades (#76C8CE and #5A9CA0)
- Delete button: Red (#E74C3C)
- Text: White (#FFFFFF) and gray for completed tasks

## Browser Compatibility

This application works on all modern browsers that support:
- ES6 JavaScript
- CSS3 (flexbox, gradients, transitions)
- jQuery 3.4.1

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License

This project is open source and available for personal and educational use.

## Acknowledgments

- Icons provided by [Font Awesome](https://fontawesome.com/)
- Fonts provided by [Google Fonts](https://fonts.google.com/)
