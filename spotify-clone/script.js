const greetingTextContainer = document.querySelector('.greeting-text');

function getGreeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  console.log(currentHour);

  if (currentHour >= 5 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

const greeting = getGreeting();
greetingTextContainer.textContent = greeting;