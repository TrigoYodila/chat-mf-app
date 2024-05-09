const conversationDataName = "conversations"
const questDataName = "questions"

export const getAllConversations = () => {
    const data = localStorage.getItem(conversationDataName)
    return data && data !== "" ? JSON.parse(data) : []
}

export const getConversationById = (id) => {
    const list = getAllConversations()

    return list.find(item => item.id === id)
}

export const createConversation = (name = "") => {
    const list = getAllConversations()

    const newConversation = {
        id:list.length + 1,
        name
    }

    list.push(newConversation)
    localStorage.setItem(conversationDataName, JSON.stringify(list))

    return newConversation
}

export const appendQuestion = (conversationId, question) => {
    const list = getAllConversations()
    list.push({
        id:list.length + 1,
        conversationId,
        question
    })

    localStorage.setItem(questDataName,list)
}