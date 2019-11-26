import axios from 'axios'

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

export const setAccessToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const getParticipants = async (eventId, progress) => {
    const response = await axios.get(`https://api.studeal.fr/v1/events/${eventId}/participants?is_participant=1`)
    const count = response.data.participants.length
    const participants = {}

    await asyncForEach(response.data.participants, async ({ id }, index) => {
        if (progress) progress(index / count)
        const participantResponse = await axios.get(`https://api.studeal.fr/v1/events/${eventId}/participants/${id}`)
        const data = participantResponse.data

        await asyncForEach(data.order_line.vouchers, async ({ security_code }) => {
            participants[security_code] = data
        })
    })

    if (progress) progress(1)

    return participants
}
