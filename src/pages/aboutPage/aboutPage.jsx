import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page" style={{
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{
        color: '#343a40',
        textAlign: 'center',
        marginBottom: '2rem',
      }}>Welcome to My Awesome Site!</h1>
      <p style={{
        textAlign: 'center',
        color: '#6c757d',
        marginBottom: '2rem',
      }}>Created by Anisa on {new Date().toLocaleDateString()}</p>
      <hr style={{
        borderColor: '#dee2e6',
        marginBottom: '2rem',
      }} />

      <h2 style={{
        color: '#343a40',
        marginBottom: '1rem',
      }}>What is this site about?</h2>
      <p style={{
        color: '#6c757d',
        marginBottom: '2rem',
      }}>
        This site is a treasure trove of free resources, where you can find a vast collection of
        <ul style={{
          listStyle: 'disc',
          padding: '0 1.5rem',
          marginBottom: '1rem',
        }}>
          <li style={{
            color: '#343a40',
          }}>Free books on various topics, from fiction to non-fiction</li>
          <li style={{
            color: '#343a40',
          }}>Free online courses to learn new skills and expand your knowledge</li>
          <li style={{
            color: '#343a40',
          }}>Free software and tools to make your life easier</li>
          <li style={{
            color: '#343a40',
          }}>And many more surprises!</li>
        </ul>
      </p>

      <h2 style={{
        color: '#343a40',
        marginBottom: '1rem',
      }}>My Story</h2>
      <p style={{
        color: '#6c757d',
        marginBottom: '2rem',
      }}>
        Hi, I'm Anisa, the creator of this site. I'm passionate about sharing knowledge and making
        information accessible to everyone. As a curious and lifelong learner, I believe that
        education should be free and available to all. That's why I created this site, to provide a
        platform where people can come together to learn, grow, and share their experiences.
      </p>

      <h2 style={{
        color: '#343a40',
        marginBottom: '1rem',
      }}>What to Expect</h2>
      <p style={{
        color: '#6c757d',
        marginBottom: '2rem',
      }}>
        On this site, you can expect to find:
        <ul style={{
          listStyle: 'disc',
          padding: '0 1.5rem',
          marginBottom: '1rem',
        }}>
          <li style={{
            color: '#343a40',
          }}>Regularly updated content, including new books, courses, and resources</li>
          <li style={{
            color: '#343a40',
          }}>A community of like-minded individuals who share their knowledge and experiences</li>
          <li style={{
            color: '#343a40',
          }}>A safe and welcoming environment, free from ads and distractions</li>
          <li style={{
            color: '#343a40',
          }}>And many more surprises, as I continue to add new features and content!</li>
        </ul>
      </p>

      <h2 style={{
        color: '#343a40',
        marginBottom: '1rem',
      }}>Get Involved</h2>
      <p style={{
        color: '#6c757d',
        marginBottom: '2rem',
      }}>
        Want to contribute to the site or suggest new resources? I'd love to hear from you! You can
        contact me through the <a href="/contact" style={{
          color: '#007bff',
          textDecoration: 'underline',
        }}>contact page</a> or join our community on
        <a href="https://discord.com/invite/your-discord-invite" style={{
          color: '#007bff',
          textDecoration: 'underline',
        }}>Discord</a>.
      </p>

      <hr style={{
        borderColor: '#dee2e6',
        marginBottom: '2rem',
      }} />
      <p style={{
        textAlign: 'center',
        color: '#6c757d',
      }}>Thanks for stopping by, and I hope you enjoy exploring my site!</p>
    </div>
  );
};

export default AboutPage;