// let currentURL = window.location.href;

// document.querySelectorAll(".navbar ul li a").forEach(p => {
//   if(currentURL.indexOf(p.getAttribute("href")) !== -1){
//     p.classList.add("active");
//   }
// })


const currentPage = location.pathname.split('/').pop();

    // Get the "Blog" navigation link
    const blogLink = document.querySelector('nav ul li a[href="blog.html"]');

    // Check if the current page is the blog page
    if (currentPage === 'blog.html') {
      blogLink.classList.add('active'); // Add "active" class to the blog link
    }
