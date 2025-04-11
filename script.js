// script.js
 

 // Dark Mode Toggle
 const darkModeToggle = document.getElementById('darkModeToggle');
 const body = document.body;
 

 darkModeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  const icon = darkModeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
 });
 

 // Screen Time Form
 const screenTimeForm = document.getElementById('screenTimeForm');
 const usageLog = document.getElementById('usageLog');
 const clearFormButton = document.getElementById('clearForm');
 

 screenTimeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (screenTimeForm.checkValidity()) {
   const app = document.getElementById('appSelect').value;
   const timeSpent = parseInt(document.getElementById('timeSpent').value);
   const limitTime = parseInt(document.getElementById('limitTime').value);
   addUsageEntry(app, timeSpent, limitTime);
   screenTimeForm.reset();
  } else {
   screenTimeForm.classList.add('was-validated');
  }
 });
 

 clearFormButton.addEventListener('click', function () {
  screenTimeForm.reset();
  screenTimeForm.classList.remove('was-validated');
 });
 

 function addUsageEntry(app, timeSpent, limitTime) {
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item');
  listItem.innerHTML = `
         ${app}: ${timeSpent} minutes (Limit: ${limitTime} minutes)
     `;
  if (timeSpent > limitTime) {
   listItem.innerHTML += `<span class="text-danger"> - Limit Exceeded!</span>`;
   showNotification("Limit exceeded for " + app + "!");
  }
  usageLog.appendChild(listItem);
 }
 

 // Personalized Goals
 const goalList = document.getElementById('goalList');
 const newGoalInput = document.getElementById('newGoal');
 const addGoalBtn = document.getElementById('addGoalBtn');
 

 addGoalBtn.addEventListener('click', function () {
  const goalText = newGoalInput.value.trim();
  if (goalText !== '') {
   addGoal(goalText);
   newGoalInput.value = '';
  }
 });
 

 function addGoal(goalText) {
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item');
  listItem.innerHTML = `${goalText} <button class="btn btn-sm btn-danger removeGoal"><i class="fas fa-trash"></i></button>`;
  goalList.appendChild(listItem);
  const removeButton = listItem.querySelector('.removeGoal');
  removeButton.addEventListener('click', function () {
   listItem.remove();
  });
 }
 

 goalList.addEventListener('click', function (event) {
  if (event.target.classList.contains('removeGoal')) {
   event.target.closest('.list-group-item').remove();
  }
 });
 

 // Book Suggestion
 const bookTitle = document.getElementById('bookTitle');
 const bookAuthor = document.getElementById('bookAuthor');
 const bookDescription = document.getElementById('bookDescription');
 const bookCover = document.getElementById('bookCover');
 const refreshBookButton = document.getElementById('refreshBook');
 

 refreshBookButton.addEventListener('click', fetchBookSuggestion);
 

 async function fetchBookSuggestion() {
  bookTitle.textContent = 'Loading...';
  bookAuthor.textContent = '';
  bookDescription.textContent = '';
  bookCover.src = '';
 

  const apiUrl = 'https://freetestapi.com/api/v1/books';
  let data = null;
 

  try {
   const response = await fetch(apiUrl);
   if (response.ok) {
    data = await response.json();
   } else {
    data = null;
   }
  } catch (error) {
   console.error('Error fetching data:', error);
   // Fallback to AllOrigins proxy
   try {
    const proxyUrl = `https://api.allorigins.win/raw?url=${apiUrl}`;
    const proxyResponse = await fetch(proxyUrl);
    if (proxyResponse.ok) {
     data = JSON.parse(proxyResponse); // Parse string data manually
    } else {
     data = null;
    }
   } catch (proxyError) {
    console.error('Error fetching data from proxy:', proxyError);
    showNotification("Failed to load book suggestion.");
    return;
   }
  }
 

  if (data && data.length > 0) {
   const suffledData = data.sort(() => Math.random() - 0.5);
   const book = suffledData[0];
   bookTitle.textContent = book.title;
   bookAuthor.textContent = `By ${book.author}`;
   bookDescription.textContent = book.description;
   bookCover.src = book.cover_image;
   bookCover.alt = book.title;
  } else {
   bookTitle.textContent = 'Failed to load book suggestion.';
  }
 }
 

 fetchBookSuggestion(); // Initial load
 

 // Notification Function
 function showNotification(message) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notificationMessage');
  notificationMessage.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => {
   notification.style.display = 'none';
  }, 3000); // Display for 3 seconds
 }