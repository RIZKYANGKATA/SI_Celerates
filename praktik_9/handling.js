//try catch
try{
    let num = 5;
    num.toUpperCase(num);

} catch(error){
    console.log(error);
    throw new Error("Ini error");
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

const fetchData = () => {
    try{
        const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

fetchData();