// 기본 API 설계자가 만든 것(generic)
function greet(name, callback) {
    const message = `안녕 ${name}`;
    callback(message);
}

function displayGreeting(greeting) {
    // console.log(greeting);
    console.log(`<h1>${greeting}</h1>`);
}
greet("예제", displayGreeting);