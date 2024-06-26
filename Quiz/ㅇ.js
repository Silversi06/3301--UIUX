
const jsonData = 
`{
    "korean_dramas": [
        {
            "title": "미스터 션샤인",
            "year": 2018,
            "genre": ["사극", "로맨스", "액션"],
            "director": "김은숙",
            "actors": ["이병헌", "김태리"]
        },
        {
            "title": "응답하라 1988",
            "year": 2015,
            "genre": ["드라마", "코미디"],
            "director": "신원호",
            "actors": ["혜리", "박보검"]
        }
    ]
}`

console.log("jsonData : ",jsonData);
const jsonObj = JSON.parse(jsonData);
console.log("jsonObj : ",jsonObj);
const jsonStr = JSON.stringify(jsonObj);
console.log("jsonStr : ",jsonStr);
