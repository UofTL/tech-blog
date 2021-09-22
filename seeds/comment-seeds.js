const { Comment } = require('../models');

const commentdata = [{
        comment_text: 'What makes Full stack developer better than a data scientist? Programming knowledge: A full stack developers have more exposure to programming languages like Java, Python, Ruby on rails etc. They understand importance of scalability as they have worked on scaling issues multiple times during their career and learn from this experience. Developers know how vital it is make code efficient enough so that no compromise is made in terms of performance while speeding up the product delivery time. A data scientist has to re-write code every time a new product is developed. They do not have full scale of control over the performance of their analysis as they cannot make any change in programming language that is being used for the project.',
        user_id: 3,
        post_id: 5
    },
    {
        comment_text: 'The most common error code you run into is a 404 error. The 404 status code means the requested resource is no longer available or, more specifically, just not found. Was it ever available there? You don’t know. You do know it isn’t available there now. What are some of the reasons for a 404 error? Typos are a common reason for getting a 404 error. A missing or extra letter in a typed-in url, or a wrong domain name can often result in a 404 error. Another reason for 404 errors isn’t typos; it is the aging of the web. When someone writes an article or blog, that person might link to a secondary source to provide additional information for the article. Now imagine revisiting said article six months or six years later. If what was linked to is no longer on the web, a 404 error will be generated when you click on the link in the browser.',
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: 'We all know how blockchain development is increasingly gaining its prominence across industries and how its valuation will skyrocket in the next few years. From fintech to entertainment companies, blockchain is being hailed as one of the saviors with its decentralized mechanisms to foster advanced encryption to confidential data.',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'There’s no question that software programming is a hot career right now. The U.S. Bureau of Labor Statistics projects 21 percent growth for programming jobs from 2018 to 2028, which is more than four times the average for all occupations. What’s more, the median annual pay for a software programmer is about $106,000, which nearly three times the median pay for all U.S. workers.',
        user_id: 2,
        post_id: 7
    },
    {
        comment_text: 'With a median cost of $13,500 in 2020, coding bootcamps can be a less expensive alternative to a four-year undergraduate program. In contrast, the average cost for undergraduate tuition and fees at a four-year university was $16,300 per year in 2018-19, according to the National Center for Education Statistics. The relatively low cost of a coding bootcamp makes it an attractive option for those wishing to enter the programming field.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Validating user input on client and server side is simply a must do! We are all aware of the sage advice “do not trust user input” but, nevertheless, mistakes stemming from validation happen all too often.',
        user_id: 1,
        post_id: 6
    },
    {
        comment_text: 'AI and machine learning engineers are in high demand as the tech industry shifts its focus toward the emerging field of automation. Thus, AI and machine learning gigs are among the best tech jobs for the future by most measures. A case in point is the high projected growth rate for the field.',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;