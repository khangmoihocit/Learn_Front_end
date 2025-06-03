export const fetchApi = async (url) => {
    const response = await fetch(url);
    const result = response.json();
    return result;
}