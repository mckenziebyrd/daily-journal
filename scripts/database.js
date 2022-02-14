/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        } ,
        {   id: 2,
            date: "01/15/2022",
            concept: "INTRO TO JAVASCRIPT",
            entry: "Today, we started to learn about the basics of javascript and functions.",
            mood: "Nervous"

        },
        {   id: 3,
            date: "04/09/2022",
            concept: "INTRO TO LOOPS IN JAVASCRIPT",
            entry: "We started learning about the different types of loops and how/when to use them.",
            mood: "Ok"

        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}