import React from "react";
import Iframe from "react-iframe";

const BlogItem = ({week , title}) => {
  return (
    <div className="   ">
      <div>
        <h1 className="font-medium text-3xl font-serif text-red-400 my-5 ">Week {week}- </h1>
        <h2 className=" p-1 my-3"> {title} </h2>
      </div>
      {/* <Iframe
        url="https://www.youtube.com/embed/wMh7Uzzs0Gk"
        id=""
        className="w-full sm:w-[100%] h-[260px] sm:h-[320px]  py-[3%] "
        display="block"
        position="relative"
      /> */}
    
    </div>
  );
};

const Blog = () => {
  return (
    <section id="blogs" className="flex flex-col  w-5/6 mx-auto  sm:py-24 py-10">
      <div className="mb-5 px-10 ">
          <h1 className="w-full text-center text-2xl sm:text-3xl font-semibold font-serif ">
           <u> Blogs{" "}</u>
          </h1>
         
        </div>
      <div className="flex flex-col gap-5 ">
        <BlogItem week={1} title={"In the first class that our mentor Mr. Vishal Chhabra introduced himself and told us about the different elements of our sixth semester's career skills syllabus and how mastering them will help us in getting good placements. A brief introduction session was also conducted where students were asked about their name,where do they come from,why they decided to opt for this course and what do they wish to become. He was very keenly observing everyone's tone and  aims and gave suggestions accordingly and kept the class engaged with some relatable bollywood movie examples."} />
        <BlogItem week={2} title={"In the second class we were taught about the two forms of introduction that we can give in our placement interviews depending upon the amount of time that is being given to every candidate for their personal interview process and also whether the interview is purely technical or a mixture of technical and hr.  First form of introduction is the one where we give the interviewer a brief idea about ourself such as name,hobbies,objective,projects etc Second form of introduction is the one where we have to give our detailed information to the interviewer with name,objective,projects,skills,research papers,internships etc. At last we were asked to preapare our introductions as an assignment for next week."} />
        <BlogItem week={3} title={"Every student was asked to handover their written introduction to sir and speak it in front of everyone whenever they felt prepared. Based on everyone's delivery of introduction feedbacks were given to every student Feedback that I received was that my pronunciation was okay and the intro was also good but I should focus on making eye contact with the interviewer rather than any one else present there and also that there is scope of improvement."} />
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-3xl font-mono text-red-400 my-5 " >Assignment(Movie Review)</h1>
          <h2 className="text-2xl text-red-500">Movie Title: <span className="text-black">The Pursuit of Happyness</span> </h2>
          <p className="font-bold">-My Favourite dialogue and why?</p>
          <p>"The world is your Oyster.It is upto you to find your pearls"</p>
          <p>The reason why I liked this dialouge is because it is relatable in a number of ways.Everyone can be successfull in their life and acheive their dream we might have to deal with hardships,failures and sadness in our journey to reach our goal but if we don't stop trying one day we will surely get the result of our efforts.We are responsible for our actions the decisions that we make and these decisions and choices lead us to what we end up achieving.Everything that we do has an impact on our future.</p>
          <p className="font-bold">-My personal Review</p>
          <p>I don't usually watch this kind of movie but it definately made a place in my heart.It taught me about how you look at things can change your life.In todays time when we get stressed out by even the little things that we can't figure out this movie delivered a story to it's audience which inspired them to change their perspective of dealing with problems and being gratefull for what we have.When you watch this movie you relate it with yourself, the efforts our parents make to provide us with the best that they could and how they never show their sadness to us no matter what problems they are facing. I don't usually watch this kind of movie but it definately made a place in my heart.It taught me about how you look at things can change your life.In todays time when we get stressed out by even the little things that we can't figure out this movie delivered a story to it's audience which inspired them to change their perspective of dealing with problems and being gratefull for what we have.When you watch this movie you relate it with yourself, the efforts our parents make to provide us with the best that they could and how they never show their sadness to us no matter what problems they are facing.</p>
          <p className="font-bold">-Learning to take away from the movie?</p>
          <p>Always have a positive approach towards every situation that you face. No matter how bad things turn out we should never give up on the things and people we love. Finding happiness in the little things of our life is important and we should be grateful for what we have. We might have to face some extremly bad conditions in our life but we should be prepared mentally to overcome that situation and move forward and make our best efforts to make situation better for us and our loves ones.</p>
          <p className="font-bold">-Related Concepts we have learned in classroom</p>
         <p>If we put in our best efforts everything can be achieved.</p>


        </div>
        <BlogItem week={4} title={"Every one was asked to give their introduction in maximum 20 words and then we were told about the improvements that can be done. The one that I gave was. I am Ankit Rawat, a skilled and enthusiastic B.Tech student in Computer Science with expertise in JavaScript, React.js, and Node.js."}/>
        <BlogItem week={5} title={"Discussion about how to tackle an interview, do's and dont's,dress code etc. were discussued.This discussion included insights of how to answer questions confidently and how to respond if we don't know the answer of any question. Some of the major questions discussed were: Tell me about yourself? Where do you see yourself in next 5/10/15 years? Who/What motivates you?"}/>
        <BlogItem week={6} title={"Discussion regarding techniques to ace interviews and how to answer questions was discussed. Answers to the questions given in our profiling sheet were also discussed."}/>
        <BlogItem week={7} title={"The topic of group discussion was taught with all the tricks. How we should do initiation How to speak if we don't have points How to present our views. How to make content based on the given topic"}/>
        <BlogItem week={8} title={"A group discussion was conducted based on given scenario.People were working in a coal mine suddenly a was started flooding into the mine,most of the people went out but 4 people were left behind Owner of the mine who is a man of around 45 and 1000 families depend on him for thwie employment,Second was a child around 10 who came their with his father who is a worker of the mine,Third was a female government officer with asthama problem and last one was a scientis who is in his last stage of cancer but has a discovery that can change the world's dependency on non renewable resources. Now the condition was that there is only a single lift and before the place fills up with water where these people are standing we can save only three out of the four people. This was a situation based group discussion and continues for approx 1 hour."}/>
        <BlogItem week={9} title={"Group discussions were conducted on topics like:-Who is smarter men or women -Should beef be banned in india"}/>
        <BlogItem week={10} title={"An activity was conducted in which our class was divided in groups of 7 people each and we were asked to act as the owners of a company with different roles for every team member. My team decided to act as the owner of  a company called Gaze.Ai which is a watch making company. I was enacting the role of the director of the company :)"}/>
        <h1>Links to our performance:</h1>
      <a className="text-red-500" target="_blank" href="https://drive.google.com/file/d/1jefLzddQzt1Lay6TVUovNfsRxla_ZSOE/view">link 1</a>
      <a className="text-red-500" target="_blank" href="https://drive.google.com/file/d/1jgkpgn9ZcTFw-Hcj_wLErwtJzVgiEFtd/view">link 2</a>
      <a className="text-red-500" target="_blank" href="https://drive.google.com/file/d/1jiInGfwBUCiBvOWcZpgXt-SluLrrW9M9/view">link 3</a>
         <Iframe
        url="https://www.youtube.com/embed/wMh7Uzzs0Gk"
        id=""
        className="w-full sm:w-[100%] h-[260px] sm:h-[320px]  py-[3%] "
        display="block"
        position="relative"
      />
      
      </div>
    </section>
  );
};

export default Blog;

