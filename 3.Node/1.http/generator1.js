const firstname = ['오', '김', '이', '박', '최', '정', '강', '조', '윤', '장'];
const lastname = ['정미', '윤경', '재은', '선진', '성진', '철수', '영희', '미애', '영웅', '형섭', '수현', '석구'];

const cities = ['서울시', '부산시' ,'대구시', '인천시', '대전시', '광주시', '울산시', '강원도', '경기도', '경상도'];
const towns = ['성북구', '강북구', '성동구', '강남구', '동구', '서구', '북구', '부평구', '계양구', '연수구', '장안구', '분당구']




function generateName () {
    const first =  firstname [Math.floor(Math.random()* firstname.length)]
    const last = lastname [Math.floor(Math.random()* lastname.length)]
    return`${first}${last}`;
};
// console.log(generateName());
const fullName = generateName();
console.log(fullName);


function generateBirthdate() {
    const year = Math.floor(Math.random() * 100);
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1; 
    return `19${year}-${month}-${day}`;
};
console.log(generateBirthdate());


function generateGender() {
    // return Math.random() < 0.5;
    // if (Math.random() <0.3) {
    //     return('여자');
    // }else if (Math.random() < 0.7) {
    //     return('남자');
    // } 
    return Math.random() < 0.5 ? '여자':'남자';
}



// const si = ['서울', '부산', '대구', '대전'];
// const gu = ['성북', '강북', '도봉', '노원'];
// const dong = ['장위', '월곡', '미아', '수유'];


function generateAddress () {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const town = towns [Math.floor(Math.random() * towns.length)];
    const street = Math.floor(Math.random() * 100) + 1;
    return `${city} ${town} ${street}`;
};
console.log(generateGender());
console.log(generateAddress());