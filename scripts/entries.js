/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

const entries = getJournalEntries()

export const entries = () => {
    // const entries = ???
    const allEntriesAsHTML = "<ul>"


    for (const entry of entries) {
        allEntriesAsHTML += `
        //    Replace this with your HTML representation of a journal entry
            <li class="entryList--${entries}"></li>
           `
    }

    return allEntriesAsHTML
}