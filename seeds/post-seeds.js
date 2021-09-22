const { Post } = require('../models');

const postdata = [{
        title: 'Which of the career option is better full stack developer or data scientist?',
        post_url: 'https://www.quora.com/Which-of-the-career-option-is-better-full-stack-developer-or-data-scientist',
        user_id: 3
    },
    {
        title: '5 Most Common HTTP Error Codes Explained',
        post_url: 'https://globo.tech/learning-center/5-most-common-http-error-codes-explained/',
        user_id: 1
    },
    {
        title: 'Top Major Trends To Follow in Full Stack Development 2021',
        post_url: 'https://www.xbytesolutions.com/blog/full-stack-development#:~:text=If%20you%20are%20associated%20with%20such%20data%20in,for%20ways%20to%20secure%20your%20electronic%20health%20records.',
        user_id: 4
    },
    {
        title: 'The 10 Most Popular Programming Languages to Learn in 2021',
        post_url: 'https://www.northeastern.edu/graduate/blog/most-popular-programming-languages/',
        user_id: 2
    },
    {
        title: 'The Best Coding Bootcamps 2021',
        post_url: 'https://www.bestcolleges.com/bootcamps/find-bootcamps/best-coding-bootcamps/',
        user_id: 2
    },
    {
        title: 'The 10 Most Common Mistakes Web Developers Make: A Tutorial for Developers',
        post_url: 'https://www.toptal.com/web/top-10-mistakes-that-web-developers-make',
        user_id: 1
    },
    {
        title: 'Best Tech Careers 2021: The Most Competitive Jobs',
        post_url: 'https://careerkarma.com/blog/best-tech-jobs/',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;