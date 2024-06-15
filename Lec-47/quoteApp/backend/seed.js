const mongoose = require('mongoose');
const Quote = require('./models/Quote.model'); 

mongoose.connect('mongodb://localhost:27017/quote-db')
    .then(() => {
        console.log('Connected to MongoDB');
        seedDatabase();
    })
    .catch(err => console.error('Connection error:', err));

function seedDatabase() {
    const quotes = [
        { author: 'John Doe', text: 'The only way to do great work is to love what you do.' },
        { author: 'Jane Smith', text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' },
        { author: 'Albert Einstein', text: 'Imagination is more important than knowledge.' },
        { author: 'Steve Jobs', text: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.' },
        { author: 'Oprah Winfrey', text: 'The biggest adventure you can take is to live the life of your dreams.' },
        { author: 'Walt Disney', text: 'The way to get started is to quit talking and begin doing.' },
        { author: 'Nelson Mandela', text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },
        { author: 'Maya Angelou', text: 'I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.' },
        { author: 'Mark Twain', text: 'The secret of getting ahead is getting started.' },
        { author: 'Mahatma Gandhi', text: 'The best way to find yourself is to lose yourself in the service of others.' },
    ];
    

    Quote.insertMany(quotes)
        .then(() => {
            console.log('Dummy data seeded successfully');
            mongoose.disconnect();
        })
        .catch(err => console.error('Error seeding dummy data:', err));
}
