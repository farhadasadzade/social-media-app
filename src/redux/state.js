let rerenderEntireTree = () => {

}

let state = {
    profilePage: {
        postData : [
            {id:1, text:"salam"},
            {id:2, text:"sagol"},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData : [
            {id:1, name:"Dimitry"},
            {id:2, name:"Eldar"},
            {id:3, name:"Tural"},
            {id:4, name:"Viktor"},
        ],
      
        messagesData : [
            {id:1, text:"salam"},
            {id:2, text:"yo"},
            {id:3, text:"hello"},
        ], 
    }  
}

export const addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText
    };
    
    state.profilePage.postData.push(newPost)

    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;