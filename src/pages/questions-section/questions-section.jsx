import QuestionBlock from "../question-block/question-block"
import "./questions-section.css"

const QuestionsSection = () => {
    return (
        <div className="questionsSection-container">
            <QuestionBlock
                 question= "What can I do in the 'Search Movies' tab?"
                 answer= "The 'Search Movies' tab allows you to explore a wide range of movies. You can search for movies by title, genre, or actor, and find detailed information such as descriptions, ratings, and release years."
            />
            <QuestionBlock
                question="What is the 'My Movies List' tab?"
                answer= "The 'My Movies List' tab is where you can save movies you're interested in watching. You can create a personalized list of movies to watch later, track your favorites, and keep everything organized in one place."
            />
            <QuestionBlock
                question="What is the 'Quiz' tab for?"
                answer = "The 'Quiz' tab offers fun and interactive movie trivia quizzes. Test your knowledge of movies, directors, actors, and more. Challenge yourself or compete with friends to see who knows the most about films."
            />
            <QuestionBlock
                question=" How do I add movies to my 'My Movies List'?"
                answer= "Simply click the 'Bookmark' button on any movie page to add it to your 'My Movies List.' You can easily access and manage your list from the 'My Movies List' tab."
            />
            <QuestionBlock
                question = "Where can I find more details about a movie?"
                answer = "Click on any movie card from the 'Search Movies' tab, and you'll be able to view detailed information such as the plot summary, cast,  release date, and more."
            />
        </div>
    )
}

export default QuestionsSection;