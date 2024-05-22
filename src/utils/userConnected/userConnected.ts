export const getUserConnected = () => {
    const userConnected = sessionStorage.getItem("userConnected");
    if(userConnected){
        return JSON.parse(userConnected);
    }
}