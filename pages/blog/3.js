import Head from "next/head";
import Image from "next/image";

const Blog3 = () => {
  return (
    <div className="items-center justify-center h-screen">
      <Head>
        <title>Web Dev for Noobs</title>
      </Head>
      <article className="prose ml-auto mr-auto">
        <Image
          src="/images/blog3.jfif"
          height="768px"
          width="768px"
          className="rounded"
          alt="jump in"
        />
        <h1>How to get started.</h1>
        <h2>
          You&apos;ve learned about the building blocks of web pages and the
          modern technologies used to create them. What now?
        </h2>
        <h3>Well, time to get building!</h3>
        <p>
          There are so many good ways to learn web development. However,
          you&apos;re not going to learn it just by reading the blog of some
          random guy on the internet. You&apos;re going to have to get into the
          meat of it yourself!
        </p>
        <p>
          While everyone learns in different ways, I strongly believe that the
          best way to learn, especially when it comes to programming, is to jump
          in and start doing it.
        </p>
        <p>
          Building a personal project is an amazing way to flex your web dev
          muscles. There are so many different types of projects you can create,
          ranging in all sorts of different difficulties. Here are a couple
          of examples of simple beginner projects that you can create:
        </p>
        <ul>
          <li>A to-do list app</li>
          <li>A personal website</li>
          <li>A calculator</li>
          <li>A portfolio</li>
        </ul>
        <p>
          There are tons of resources and tutorials online for building projects
          like these. I&apos;d highly recommend checking out YouTube, especially
          content creator Web Dev Simplified as I mentioned before. He has tons
          of tutorials on some simple projects using the building blocks of
          HTML, CSS, and JS, all the way up to more advanced projects with React
          and databases. I was able to learn a lot of my skills, thanks to him!
          Here&apos;s one of his videos on how to create a calculator.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/j59qQ7YWLxw"
          title="YouTube video player"
        ></iframe>
        <h3>Joining a Team</h3>
        <p>
          Once you feel comfortable enough with a good amount of web development
          on your own, I&apos;d highly recommend finding a team of other
          developers to work with. If you&apos;re in college or a high school
          student, check out your school&apos;s clubs and organizations. If
          there&apos;s a coding, software, or web development club (or something
          similar), go check it out! If there isn&apos;t a club, try and make
          one - if you build it, they will come!
        </p>
        <p>
          By working in a team, especially a club where there are members of all
          sorts of different skill levels, there is a myriad of benefits that
          come with it.
        </p>
        <h4>Support System</h4>
        <p>
          One of the best parts of joining a team is having the knowledge of all
          the other team members at your disposal. Stumped about where to start?
          Have a pesky bug? Want someone to review your code? Luckily, with a
          team, you have a whole group of people that can help you with all of
          the above. Conversely, you can help out other team members as well.
          You&apos;d be surprised how much you learn something by how you teach
          it to somebody else!
        </p>
        <h4>Learning to Work Collaboratively</h4>
        <p>
          Of course, working as a part of a team helps you develop tons of
          valuable soft skills, in addition to your technical skills. Skills
          like technical communication, leadership, collaboration, and so much
          more. These soft skills will be extremely valuable as you begin to
          navigate your professional career in web development and working in a
          team.
        </p>
        <p>
          Moreover, by working together with other developers, you get to learn
          the technical side of working together in software. With many
          developers working together, but separately, on one codebase,
          there&apos;s a need to make sure that everything is up to date for
          everyone. Software teams will often use a version control system - or
          a VCS - to track changes to the codebase. By far, the most popular VCS
          is Git. In addition, there are online services like GitHub and GitLab
          that allow for teams to host their codebases remotely. These services
          also have tons of features that allow for more collaboration, like
          code reviews, issue tickets, pull requests, and so much more. You
          can also use VCS on your personal projects as well!
        </p>
        <h4>Networking Opportunities</h4>
        <p>
          Another one of the benefits of working within a professional team are
          the networking opportunities. By being in a team of diverse developers
          from all sorts of technical backgrounds, who knows if an opportunity
          may arise in the future that they might know of, or that you can
          offer! Connecting with LinkedIn is just one of many ways to network
          professionally.
        </p>
        <h4>Stand Out to Employers</h4>
        <p>
          Having a combination of personal and team projects is a huge green
          flag for recruiters. Having personal projects proves that you are
          passionate about the field - on your own time, you&apos;ve invested
          effort into creating content that reinforces your skills. Working on
          team projects show that you&apos;re experienced in collaborating on a
          software product - something you would do at a company too.
        </p>
        <h4>Make new friends!</h4>
        <p>
          One of my favorite parts about joining a club is just getting to meet
          new people and make new friends! Especially for college students,
          clubs are a great way to meet new people and branch out.
        </p>
        <h3>So what are you waiting for???</h3>
        <p>
          Get out there and start coding! The possibilities are endless. Whether
          you&apos;re just curious about how it works, want to do it as a side
          hustle, or are looking to do web development as a career, the best
          time to start is yesterday. Good luck!
        </p>
      </article>
    </div>
  );
};

export default Blog3;
