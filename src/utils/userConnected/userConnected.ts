
export const getUserConnected = () => {
    const userConnected = sessionStorage.getItem("userConnected");
    if(userConnected){
        const user = JSON.parse(userConnected);
        return user;
    }
}