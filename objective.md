# Digital_Detox_Tracker

## Objective
This project is a Digital Detox Tracker designed to help users monitor and manage their screen time and set personal goals for reducing digital consumption. It features a dark/light mode toggle, a form to log screen time usage, a personalized goal list, and a book suggestion feature fetched from an external API. The application is built using HTML, CSS, and JavaScript.

## Output
<iframe src="https://niat-web.github.io/Digital_Detox_Tracker" height="1000" width="300" title="Digital_Detox_Tracker"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript

## Features to Implement
- Dark/Light Mode Toggle: Allow users to switch between dark and light themes for improved user experience.
- Screen Time Logging: Enable users to input and track their screen time for specific apps, along with defined time limits.
- Personalized Goals: Allow users to add, track, and remove personalized goals to reduce digital consumption.

## UI Enhancements
- Visual Feedback: Provide clear visual feedback when screen time limits are exceeded.
- Responsive Design: Ensure the application is responsive and accessible on various screen sizes.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement Dark Mode Toggle | Users can switch between light and dark themes by clicking a toggle button. |
| Create Screen Time Form | Users can input app name, time spent, and limit time and submit the form. |
| Display Usage Log | Logged screen time entries are displayed in a list, highlighting limit exceedances. |
| Implement Personalized Goals | Users can add new goals to a list and remove existing goals. |
| Fetch Book Suggestion | A random book suggestion is fetched from an external API and displayed. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to dynamically update the content of the page, such as adding usage entries, goals, and book suggestions. |
| Event Listeners | Used to handle user interactions, such as form submissions, button clicks, and goal removals. |
| Async/Await | Used to handle asynchronous API calls to fetch book suggestions. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| freetestapi.com | /api/v1/books | Provides a list of books with their titles, authors, descriptions, and cover images. |
| api.allorigins.win | /raw?url=[URL] | Proxy to avoid CORS issues when direct API requests fail. |

## MISC Section:

### 1. Formulas/Calculations:
- The project uses comparison operations (`timeSpent > limitTime`) to check if the time spent exceeds the defined limit. This calculation is implicitly used within the `addUsageEntry` function to determine if a limit has been exceeded and display a warning message.
### 2. Array Data:
- After the response from the API is received, the data is shuffled using the `.sort(() => Math.random() - 0.5)` method to provide a different book suggestion each time the `refreshBookButton` is clicked. There is no other data array explicitly defined in the code.