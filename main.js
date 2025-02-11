document.getElementById('moveButton').addEventListener('click', function() {
  // Get the moving box
  const movingBox = document.getElementById('movingBox');
  
  // Add a class to move the box with a smooth transition
  movingBox.style.transform = 'translateX(500px)'; // Move 500px to the right

  // You can also use `translateY` to move vertically (e.g., translateY(300px))
});
