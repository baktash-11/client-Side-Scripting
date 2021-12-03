"use strict";
(() => {

    let headingOne = document.getElementById('headingOne')
    console.log(headingOne)


    let headingTwo = document.createElement('h2');
    headingTwo.classList.add("display-6")
    headingTwo.textContent = "I live in app.js :)";
    let parent = headingOne.parentNode;

    parent.appendChild(headingTwo);





    let Start = () => {

        console.log("Start Function is working all right!");
        Main();
    }

    let Main = () => {
        console.log('Main function is running');
        AddMenuItem();
    }

    let AddMenuItem = () => {/**Adding project menu item to nav bar */
        
        let li = document.createElement('li'); /**Create a li element */
        let a = document.createElement('a'); /**Create a anchor  */
        let about = document.getElementById('about'); /** get a referenced to about nav item*/

        let liParent = about.parentNode; /**get parent of menu element */


        li.classList.add('nav-item');/**attach class nav-time to list item */
        a.classList.add('nav-link');/**attach class of nave-link to anchor tag */
        a.href = './proj.html' /**attach link to our a anchor */
        a.textContent = "Projects";/**adding text to Anchor tag */
        li.appendChild(a); /**Append the anchor tag to list Item(li) */
        liParent.insertBefore(li, about);/**insert the li before about menu item */
    
    }

    window.addEventListener('load', Start);
})();