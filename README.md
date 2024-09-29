### Project Description: Expanding Cards

**Overview:**
This project demonstrates a simple and interactive image gallery with expanding cards. Each card, referred to as a "panel," contains a background image and a descriptive heading. When a user clicks on a panel, it expands to reveal more details and display the image in full size, while the other panels shrink. This effect provides an engaging way to display images and content dynamically on a webpage.

**Key Features:**
1. **Interactive Panels**: Users can click on any panel to expand it and reveal more of the image. The clicked panel smoothly enlarges, while the others shrink, creating a visually appealing effect.
2. **Responsive Design**: The layout adjusts based on the screen size, ensuring an optimal viewing experience on both desktop and mobile devices. On small screens, only the first three panels are visible.
3. **Smooth Transitions**: Using CSS transitions, the resizing of panels and the appearance of headings occur smoothly, providing a seamless and visually engaging experience.
4. **Background Images**: Each panel has a distinct background image, representing various landmarks (temple, pyramids, sphinx, etc.), creating a visually immersive display.
5. **Dynamic Heading Display**: The heading text remains hidden until the panel is expanded, where it then appears with a smooth fade-in effect.

**Technologies Used:**
- **HTML5**: To structure the page and define the layout of panels.
- **CSS3**: For styling the panels, adding hover effects, and ensuring smooth transitions. Media queries are used for responsive design.
- **JavaScript (ES6)**: To manage user interactions, such as detecting clicks and toggling the expansion effect.

**How it Works:**
- Initially, one panel is expanded, and the rest are compressed. When a user clicks on a different panel, the previously expanded panel collapses, and the newly clicked panel expands.
- The JavaScript logic ensures that only one panel is expanded at a time.
- The layout is responsive, with different heights for panels on larger and smaller screens. On mobile devices, the layout switches from horizontal to vertical stacking to better suit small screens.

**Use Cases:**
- This project can be used in image galleries, travel blogs, portfolio websites, or any situation where an engaging way to showcase images and related text is needed.
