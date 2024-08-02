let searchBox = document.querySelector('.search-box');

// Select the search icon element
let searchIcon = document.querySelector('#search-icon');

// Toggle the 'active' class on the search box when the search icon is clicked
searchIcon.onclick = () => {
    searchBox.classList.toggle('active');
}




