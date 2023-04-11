// Root Node/Element Node------------------------------------>
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

//   Childrens----------------------------------------------->
console.log(document.body.childNodes);

console.log(document.body.children);
//   OR
//   traversal --> used to "find" (or select) HTML elements based on their relation to other elements--->
for (node of document.body.children) {
  console.log(node);
}
//   Now it shows all the nodes { text,ul,text,script }--->
for (node of document.body.childNodes) {
  console.log(node);
}
//   And if you want to use Array methods in this--->
const childrensOfBody = Array.from(document.body.children);
console.log(childrensOfBody);

console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

//   Siblingss----------------------------------------------->
const ulTag = document.body.children[0];

// for selecting all Nodes--->
console.log(ulTag.nextSibling);
console.log(ulTag.previousSibling);

// for selecting all Element--->
console.log(ulTag.nextElementSibling);
console.log(ulTag.previousElementSibling);

//   selecting <ul> tag's children <li> tags--->
const firstLi = ulTag.children[0];
const secondLi = ulTag.children[1];
const thirdLi = ulTag.children[2];
// for verifying use textcontent-->
console.log(firstLi.nextElementSibling.textContent);
console.log(secondLi.previousElementSibling.textContent);
console.log(thirdLi.previousElementSibling.textContent);

//   Table DOM Manipulation---------------------------------->
const tableTag = document.body.children[1];
//   all rows are showed-->
console.log(tableTag.rows);
//   by using tbodies-->
console.log(
  (tableTag.tBodies[0].rows[0].cells[0].style = "background-color:red")
);
console.log(
  (tableTag.tBodies[0].rows[0].cells[1].style = "background-color:blue")
);
console.log(
  (tableTag.tBodies[0].rows[1].cells[0].style = "background-color:yellow")
);
console.log(
  (tableTag.tBodies[0].rows[1].cells[1].style = "background-color:white")
);

//   ID search----------------------------------------------->
element.style.backgroundColor = "orange";
//   OR
const ul_Tag_Id = document.getElementById("element");
ul_Tag_Id.style.backgroundColor = "lightblue";

//   class search-------------------------------------------->
const list_siblings = document.getElementsByClassName("list-item");
console.log(list_siblings[0].textContent);
console.log(list_siblings[1].textContent);
console.log(list_siblings[2].textContent);
//   by using tag name-->
console.log(document.getElementsByTagName("table"));

//   Queryselector------------------------------------------->
// Queryselector in ID--->
const ul_queryselector = document.querySelector("#element");
console.log(ul_queryselector);
// Queryselector in class--->
const lists_queryselector = document.querySelectorAll(".list-item");
console.log(lists_queryselector);
// finding last child of ul lag by Queryselector--->
const lastchild_queryselector = document.querySelectorAll("ul > li:last-child");
console.log(lastchild_queryselector[0].textContent);
// finding nth child of ul lag by Queryselector // use nth-child(number)--->
const nthchild_queryselector = document.querySelectorAll(
  "ul > li:nth-child(1)"
);
console.log(nthchild_queryselector[0].textContent);

// Attribute Selector---------------------------------------->
// for getting the attribute--->
console.log(id_name.getAttribute("data"));
// for setting the attribute--->
console.log(id_name.setAttribute(`expresion`, `lol`));
// for checking the attribute is exist or not--->
console.log(id_name.hasAttribute("expresion"));
// for remove the attribute--->
console.log(id_name.removeAttribute("expresion"));
// for check all attributes--->
console.log(id_name.attributes);

//  Creating and removing also updateing the node elements--->
const newdiv = document.createElement("div");
const newText = document.createTextNode("haha ami text pass korchi");
newdiv.appendChild(newText);
body.append(newdiv);
body.prepend(newdiv);
body.before(newdiv);
body.after(newdiv);
// For replacement--->
replacekorbo.replaceWith(newdiv);
// for removing--->
lets_remove.remove();
// Adding text new style--->
const innertext = document.createElement(`div`);
innertext.textContent = "inner text add in a new style";
body.append(innertext);
// Adding INNERHTML--->
const innercode = document.createElement(`div`);
innercode.innerHTML = `<a name="list" style="color:blue;">Adding list in inner html tag</a>
    <ul>
      <li><a href="http://google.com">http://google.com</a></li>
      <li><a href="/tutorial">/tutorial.html</a></li>
      <li><a href="local/path">local/path</a></li>
      <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
      <li><a href="http://nodejs.org">http://nodejs.org</a></li>
      <li><a href="http://internal.com/test">http://internal.com/test</a></li>
    </ul>`;
body.append(innercode);

// Manipulating style
innercode.style.backgroundColor = "red";
body.style.margin = "100px";

// Events---------------------------------------------------->

//  adding onclick event--->

//  NO-->{1}
const btn_one = document.createElement(`button`);
body.append(btn_one);
btn_one.innerText = "Don't Touch";

btn_one.addEventListener("click", myScript);
function myScript() {
  var myText = "mana kore chilam na click korte, lee bujh aber...";
  alert(myText);
}
// RemoveEventListener   -->
btn_one.removeEventListener("click", myScript);

//  NO-->{2}
const btn_two = document.createElement(`button`);
body.append(btn_two);
btn_two.innerText = "Touch IT";

btn_two.onclick = function () {
  alert(`fuck off🖕🏻`);
};

//  NO-->{3}
const btn_three = document.createElement(`button`);
body.append(btn_three);
btn_three.innerText = "bhag Touch korbi na";

function callMe() {
  alert(`kno touch korli🤬`);
}
btn_three.onclick = callMe;

//  NO-->{4}
const btn_four = document.createElement(`button`);
body.append(btn_four);
btn_four.innerText = "bhhhhhhag";

btn_four.addEventListener("click", mySpt);
function mySpt(event) {
  console.log(event.type);
  console.log(event.currentTarget);
  console.log(event.clientY);
  console.log(event.clientY);
  alert("bhag bsdk");
}
// RemoveEventListener   -->
