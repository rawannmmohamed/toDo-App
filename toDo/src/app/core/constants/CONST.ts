export const constants = {
    CURRENT_TOKEN:'CURRENT_TOKEN',
};

const apiURL = 'http://localhost:8000/api';

export const apiEndPoint={
    AuthEndpoint:{
        login:`${apiURL}/login`,
        logout:`${apiURL}/logout`,
        loggedUser:`${apiURL}/user`
    },
    TodoEndPoint:{
        getAllTodos:`${apiURL}/todos`,
        addATodo:`${apiURL}/todo`,
        updateTodo:`${apiURL}/todo/`


    }
};