const h1 = document.querySelector("h1");
h1.textContent = "Lab7 Assignment";
h1.style.color = "blue";
h1.setAttribute("class", "Title");

const hr1 = document.createElement('hr');
h1.after(hr1);

const h2_1 = document.createElement('h2');
h2_1.textContent = "Task";
h2_1.style.color = "Red";

hr1.after(h2_1);

const p1 = document.createElement('p');
p1.textContent = "In this task you have to reproduce this HTML page as is using only JavaScript.  task will be evaluated on the basis of the following DOM manipulation techniques:";
h2_1.after(p1);

const ul1 = document.createElement('ul');
ul1.classList.add('List1');
p1.after(ul1);

const li1 = document.createElement('li');
li1.textContent = 'find elements in the DOM (5 points)';
li1.style.color = 'green';

const li2 = document.createElement('li');
li2.textContent = 'create/add/remove elements (5 points)';
li2.style.color = 'purple';

const li3 = document.createElement('li');
li3.textContent = 'change content of the elements (5 points)';
li3.style.color = 'green';

const li4 = document.createElement('li');
li4.textContent = 'change styles of the elements (5 points)';
li4.style.color = 'purple';

const li5 = document.createElement('li');
li5.textContent = 'change attributes of the elements (5 points)';
li5.style.color = 'green';

const li6 = document.createElement('li');
li6.textContent = 'change classes of the elements (5 points)';
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
ul2.classList.add('List2');
p2.after(ul2);

const li2_1 = document.createElement('li');
li2_1.textContent = 'Create a new repository on Github, named lab7 (1 point).';
li2_1.style.color = 'green';

const li2_2 = document.createElement('li');
li2_2.textContent = 'Clone this repository to your local machine and work inside it.';
li2_2.style.color = 'purple';

const li2_3 = document.createElement('li');
li2_3.textContent = 'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point).';
li2_3.style.color = 'green';

const li2_4 = document.createElement('li');
li2_4.textContent = 'Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).';
li2_4.style.color = 'purple';

const li2_5 = document.createElement('li');
li2_5.textContent = 'Link this main.js file to your index.html file (Note: place your script at the end of the body section).';
li2_5.style.color = 'green';

const li2_6 = document.createElement('li');
li2_6.textContent = 'Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).';
li2_6.style.color = 'purple';

const li2_7 = document.createElement('li');
li2_7.textContent = 'After you finish your work, submit it to the Github (2 points).';
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

