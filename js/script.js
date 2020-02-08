/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/


const listItems = document.getElementsByTagName('li');
const page = document.querySelector(".page");
let student_list;
let pageList;
let currentPage = 1;
let numberPerPage = 10;
let numberOfPages; // calculate the total


// hide list
const hide_list = (data) =>{
   for (let i = 0; i < data.length; i += 1) {
      data[i].style.display = "none";
      student_list = data[i].length
   }
}
hide_list(listItems);


// Show page 
const showPage = (list, page) =>{
   currentPage = page;
   if (list.length >= currentPage){
      for (let i = 0; i < currentPage; i++) {
         student_list = list[i];
         student_list.style.display = "block"
      } 
   }
   if (list.length <= page){
      for (let i = 0; i < list.length; i += 1) {
         student_list = list[i];
         student_list.style.display = "none";
      }
   }

}

showPage(listItems, 10)


// Append Links 
function appendPageLinks (list) {
   let div = document.createElement('div');
   div.className = "pagination";
   page.appendChild(div);
   let ul = document.createElement('ul');
   let pageUl = div.appendChild(ul)
   let pageLinks;
   let aTag;

   // Calculate number of pages
   numberOfPages = Math.ceil(list.length / numberPerPage);

   // append anchor links 
	for (let i = 1; i < numberOfPages + 1; i++) {
      pageLinks = document.createElement('li');
      aTag = document.createElement('a');
      aTag.innerHTML = i;
      pageLinks.appendChild(aTag);
      pageUl.appendChild(pageLinks);
   }

   if (listItems == page) {
      aTag.classList.add('active');
   }
   else{
      aTag.classList.remove('active');
   }
   
}


appendPageLinks(listItems);



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.

