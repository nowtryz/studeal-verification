import readline from 'readline'
import {getParticipants, setAccessToken} from "./requests";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const begin = () => rl.question('Please enter your token: ', askEvent)

const askEvent = (token) => rl.question('Please enter the event id: ', (id) => fetchEventParticipants(token, id))

const fetchEventParticipants = async (token, id) => {
    setAccessToken(token)
    const eventId = parseInt(id)
    const participatns = await getParticipants(eventId, (progress) => process.stdout.write(`progress: ${(progress*100).toFixed(2)} %\r`))
    process.stdout.write('\n')

    Object.keys(participatns).forEach((number) => {
        const p = participatns[number]
        console.log(`${number} => ${p.first_name} ${p.last_name}, ${p.ticket.name}`)
    })

    process.exit()
}

begin()


