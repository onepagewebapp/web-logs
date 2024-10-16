// Sample blog data
const blogs = [
    {
        title: 'Blog Post Title 1',
        content: 'Sed vehicula dolor a odio bibendum, vel laoreet ex malesuada. Nam euismod ex in nisl posuere bibendum.',
        additionalContent: 'This is the additional part of your paragraph...',
        imgSrc: 'https://via.placeholder.com/800x400',
        url: 'blog-1.html'
    },
    {
        title: 'Blog Post Title 2',
        content: 'Another blog post content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        additionalContent: 'More details about the second blog post...',
        imgSrc: 'https://via.placeholder.com/800x400',
        url: 'blog-2.html'
    },
    {
        title: 'Blog Post Title 3',
        content: 'Third blog post content. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus.',
        additionalContent: 'Additional content for Blog Post 3...',
        imgSrc: 'https://via.placeholder.com/800x400',
        url: 'blog-3.html'
    }
];

// Function to add a blog post to the page (but hidden initially)
function addBlogPost(blog, index) {
    const blogPostsContainer = document.getElementById('blog-posts');
    const blogList = document.getElementById('blog-list');

    // Create a unique ID for each blog post and toggle button
    const blogPostId = `blogPost${index}`;
    const toggleButtonId = `toggleButton${index}`;

    // Create blog post element
    const blogPost = document.createElement('div');
    blogPost.className = 'card mb-4 blog-post';
    blogPost.id = blogPostId;

    // By default, hide all blog posts except the first one
    if (index !== 0) {
        blogPost.style.display = 'none'; // hide all posts except the first one
    }

    blogPost.innerHTML = `
        <img src="${blog.imgSrc}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${blog.title}</h5>
            <p class="card-text">${blog.content}</p>
            <span id="additionalText${index}" class="collapse">
                <p>${blog.additionalContent}</p>
            </span>
            <a href="#additionalText${index}" id="${toggleButtonId}" class="btn btn-primary" data-bs-toggle="collapse" aria-expanded="false">See More</a>
        </div>
    `;

    // Append blog post to container
    blogPostsContainer.appendChild(blogPost);

    // Create blog link element (for the category list)
    const blogLink = document.createElement('li');
    blogLink.className = 'list-group-item';
    blogLink.innerHTML = `<a href="#" class="blog-link" data-index="${index}">${blog.title}</a>`;

    // Append blog link to list
    blogList.appendChild(blogLink);

    // Add event listener to toggle 'See More' and 'See Less'
    const toggleButton = document.getElementById(toggleButtonId);
    toggleButton.addEventListener('click', function () {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.textContent = isExpanded ? 'See Less' : 'See More';
    });
}

// Function to show the selected blog post
function showBlogPost(index) {
    const allPosts = document.querySelectorAll('.blog-post');

    // Hide all blog posts
    allPosts.forEach(post => {
        post.style.display = 'none';
    });

    // Show the selected blog post
    document.getElementById(`blogPost${index}`).style.display = 'block';
}

// Add all blogs to the page
blogs.forEach((blog, index) => addBlogPost(blog, index));

// Add event listener for the category links
document.querySelectorAll('.blog-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const index = this.getAttribute('data-index');
        showBlogPost(index);
    });
});

// Example: Add another blog post dynamically (if needed)
blogs.push({
    title: 'Blog Post Title 4',
    content: 'Content for Blog Post 4',
    additionalContent: 'Additional content for Blog Post 4...',
    imgSrc: 'https://via.placeholder.com/800x400',
    url: 'blog-4.html'
});
addBlogPost(blogs[blogs.length - 1], blogs.length - 1);




window.addEventListener('scroll', function () {
    const aboutSection = document.getElementById('about');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add('visible');
    }
});
