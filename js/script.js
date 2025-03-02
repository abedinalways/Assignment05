const today = new Date().toDateString();
document.getElementById('todayDate').innerHTML = today;
const completeBtns = document.querySelectorAll('.btn-primary');
let activities = document.getElementById('activities');
const taskNumber = document.getElementById('taskNum').innerText;
let taskNum = parseInt(taskNumber);
const taskDone = document.getElementById('taskDone').innerText;
let numberTask = parseInt(taskDone);
for (const button of completeBtns) {
  button.addEventListener('click', function (event) {
    if (event.target) {
      event.target.disabled = true;
      const activityContainer = event.target.closest('.card-body');
      const activityTitle = activityContainer.querySelector('h2').innerText;

      let addActivities = document.createElement('div');
      addActivities.innerHTML = `
      <div class="bg-green-50 m-2 p-2 text-[12px]">
      <p>You have completed the task of <span class="font-bold">${activityTitle}</span> at ${new Date().toLocaleTimeString()}</P>
      </div>`;
      activities.appendChild(addActivities);
      taskNum--;
      numberTask++;
      document.getElementById('taskNum').innerText = taskNum;
      document.getElementById('taskDone').innerText = numberTask;
      alert('board updated successfully');
      if (taskNum === 0) {
        alert('Congress!!! You have completed the current task');
      }
    }
  });
}
//background color change randomly
document.getElementById('themeBtn').addEventListener('click', function () {
  changeColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(changeColor);
  document.body.style.backgroundColor = `#${changeColor}`;
});
//discover blogs page
document.getElementById('discover').addEventListener('click', function () {
  window.location.href = './blogs.html';
});

//activity logs clear history
document.getElementById('clear').addEventListener('click', function (event) {
  event.target.disabled = false;
  activities.innerHTML = '';
  //reset all activities
  document.getElementById('taskNum').innerText = taskNumber;
  taskNum = parseInt(taskNumber);
  document.getElementById('taskDone').innerText = taskDone;
  numberTask = parseInt(taskDone);
  for (const button of completeBtns) {
    button.disabled = false;
  }
});
