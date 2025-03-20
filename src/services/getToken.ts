export const getToken = () => {
    const accessToken = localStorage.getItem('token');

    return {
        accessToken
    }
}