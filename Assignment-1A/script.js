$(document).ready(()=>{
  
  $('#open-sidebar').click(()=>{
     
      // add class active on #sidebar
      $('#sidebar').addClass('active');
      
      // show sidebar overlay
      $('#sidebar-overlay').removeClass('d-none');
    
   });
  
  
   $('#sidebar-overlay').click(function(){
     
      // add class active on #sidebar
      $('#sidebar').removeClass('active');
      
      // show sidebar overlay
      $(this).addClass('d-none');
    
   });

  // Check if user is logged in
  const loggedInUser = localStorage.getItem('loggedInUser');

  if (loggedInUser) {
    // User is logged in
    updateLoggedInUser(loggedInUser);
  }

  // Sign-in form submit event
  $('#signin-form').submit((event) => {
    event.preventDefault();
    
    const username = $('#username').val();

    if (username) {
      // Set the logged-in user in local storage
      localStorage.setItem('loggedInUser', username);

      // Update the user in the dropdown
      updateLoggedInUser(username);
    }
  });

  // Logout button click event
  $('#logout-btn').click(() => {
    // Clear the logged-in user from local storage
    localStorage.removeItem('loggedInUser');

    // Hide the user in the dropdown
    hideLoggedInUser();
  });

  // Function to update the user in the dropdown
  function updateLoggedInUser(username) {
    $('#logout-dropdown').removeClass('d-none');
    $('#logout-dropdown .bi-person').text(username);
  }

  // Function to hide the user in the dropdown
  function hideLoggedInUser() {
    $('#logout-dropdown').addClass('d-none');
  }
});