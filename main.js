const h1 = document.querySelector("h1");
h1.textContent = "Lab7 Assignment";
h1.style.color = "blue";

const hr1 = document.createElement('hr');
h1.after(hr1);

const h2_1 = document.createElement('h2');
h2_1.textContent = "Task";
h2_1.style.color = "Red";

hr1.after(h2_1);

const p1 = document.createElement('p');
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
h2_1.after(p1);

const ul1 = document.createElement('ul');
p1.after(ul1);

const li1 = document.createElement('li');
li1.innerHTML = 'find elements in the DOM (<b>5 points</b>);';
li1.classList.add('even')
li1.style.color = 'green';

const li2 = document.createElement('li');
li2.innerHTML = 'create/add/remove elements (<b>5 points</b>);';
li2.classList.add('odd');
li2.style.color = 'purple';

const li3 = document.createElement('li');
li3.innerHTML = 'change content of the elements (<b>5 points</b>);';
li3.classList.add('even')
li3.style.color = 'green';

const li4 = document.createElement('li');
li4.innerHTML = 'change styles of the elements (<b>5 points</b>);';
li4.classList.add('odd');
li4.style.color = 'purple';

const li5 = document.createElement('li');
li5.innerHTML = 'change attributes of the elements (<b>5 points</b>);';
li5.classList.add('even')
li5.style.color = 'green';

const li6 = document.createElement('li');
li6.innerHTML = 'change classes of the elements (<b>5 points</b>).';
li6.classList.add('odd');
li6.style.color = 'purple';

ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);
ul1.appendChild(li5);
ul1.appendChild(li6);

const hr2 = document.createElement('hr');
ul1.after(hr2);

const h2_2 = document.createElement('h2');
h2_2.textContent = "Submission";
h2_2.style.color = "Red";

hr2.after(h2_2);

const p2 = document.createElement('p');
p2.textContent = "To submit your work, follow these instructions:";
h2_2.after(p2);

const ul2 = document.createElement('ul');
p2.after(ul2);

const li2_1 = document.createElement('li');
li2_1.innerHTML = 'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>)';
li2_1.classList.add('even');
li2_1.style.color = 'green';

const li2_2 = document.createElement('li');
li2_2.textContent = 'Clone this repository to your local machine and work inside it.';
li2_2.classList.add('odd');
li2_2.style.color = 'purple';

const li2_3 = document.createElement('li');
li2_3.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';
li2_3.classList.add('even');
li2_3.style.color = 'green';

const li2_4 = document.createElement('li');
li2_4.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).';
li2_4.classList.add('odd');
li2_4.style.color = 'purple';

const li2_5 = document.createElement('li');
li2_5.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';
li2_5.classList.add('even');
li2_5.style.color = 'green';

const li2_6 = document.createElement('li');
li2_6.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).';
li2_6.classList.add('odd');
li2_6.style.color = 'purple';

const li2_7 = document.createElement('li');
li2_7.innerHTML = 'After you finish your work, submit it to the Github (<b>2 points</b>).';
li2_7.classList.add('even');
li2_7.style.color = 'green';

ul2.appendChild(li2_1);
ul2.appendChild(li2_2);
ul2.appendChild(li2_3);
ul2.appendChild(li2_4);
ul2.appendChild(li2_5);
ul2.appendChild(li2_6);
ul2.appendChild(li2_7);

const hr3 = document.createElement('hr');
ul2.after(hr3);

