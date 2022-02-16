import { getJournalEntries } from "./database.js";
import { DailyJournal } from "./DailyJournal.js"

const container = document.querySelector("#entries")

const render = () => {
    container.innerHTML = DailyJournal()
}