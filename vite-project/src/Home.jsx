import React from "react";
function Home() {
    const list = [
        {
            title: 'React',
            mentor: 'Manikandan',
            point: 5
        },
        {
            title: 'MongoDB',
            mentor: 'Manikandan',
            point: 5
        },
        {
            title: 'angular JS',
            mentor: 'Manikandan',
            point: 5
        },
        {
            title: 'javascript',
            mentor: 'Manikandan',
            point: 5
        }
    ]
    return (
        <>
            <h1>List of Topics</h1>
            <ol>
                {list.map(function (topic) {
                    return <li>{`${topic.title}-${topic.mentor}-${topic.point}`}</li>
                })}
            </ol>
        </>
    )
}
export default Home