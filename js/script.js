const today = new Date().toDateString();
document.getElementById('todayDate').innerHTML = today;
const completeBtns = document.querySelectorAll('#btn-completed');
let activities = document.getElementById('activities');
const taskNumber = document.getElementById('taskNum').innerText;
taskNum = parseInt(taskNumber);
const taskDone = document.getElementById('taskDone').innerText;
numberTask = parseInt(taskDone);
for (const btn of completeBtns) {
  btn.addEventListener('click', function (event) {
    if (event.target) {
      event.target.disabled = true;
      const activityContainer = event.target.closest('.card-body');
      const activityTitle = activityContainer.querySelector('h2').innerText;
      
      const addActivities = document.createElement('div');
      addActivities.innerHTML = `
      <div class="bg-green-50 m-2 p-2">
      <p>"you have completed the task of ${activityTitle} at ${new Date().toTimeString()}"</P>
      </div>`
      activities.appendChild(addActivities);
      const clearHistory = document
        .getElementById('clear')
        .addEventListener('click', function (event) {
          event.preventDefault();
          activities.removeChild(addActivities);
        });

      taskNum--;
      numberTask++;
      document.getElementById('taskNum').innerText = taskNum;
      document.getElementById('taskDone').innerText = numberTask;
      alert("board updated successfully")
      if (taskNum===0) {
        alert('you have completed the current task')
      }
    }
  });
}
