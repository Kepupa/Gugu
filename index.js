import _ from 'lodash'

export default function solution(content){
  // BEGIN
  
    const data = content.split("\n").slice(1);
    const dataLen = data.length - 1;
    
    console.log(`Count: ${dataLen}`);
    // 2
    const dataArr = [data]
    const cutArray = dataArr.toString().split(",");
    const cities = []
     
    for (var i = 7; i < cutArray.length; i += 10) {
       cities.push((cutArray[i]));
    }
    var uniqueArray = Array.from(new Set(cities)).sort();
     
    const b = uniqueArray.join(", ")
    
    console.log( `Cities: ${b}`);
    // 3
    
    const hum = []
    for (var i = 3; i < cutArray.length; i += 10) {
        hum.push((cutArray[i]));
     }
    const sortHum = hum.sort()
    const a = sortHum[sortHum.length - 1]
    const v = sortHum[0]
    
    
    console.log(`Humidity: Min: ${v}, Max: ${a}`)
    };
    
  // END

