const today = new Date().toDateString();
document.getElementById('todayDate').innerHTML = today;
const completeBtns = document.querySelectorAll('#btn-completed');
const taskNumber = document.getElementById('taskNum').innerText;
taskNum = parseInt(taskNumber);
const taskDone = document.getElementById('taskDone').innerText;
numberTask = parseInt(taskDone);
for (const btn of completeBtns) {
  btn.addEventListener('click', function (event) {
    if (event.target) {
      event.target.disabled= true;
      console.dir(event.target);
      
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
