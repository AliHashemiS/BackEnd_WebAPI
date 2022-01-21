

export class Importador {

  functions = [];

  constructor(functions) {
    
    this.functions = Object.keys(functions).map(key => {
      return { name: key, id: functions[key] }
    });
    return this.downloadFunctions();
  }


  downloadFunctions = async function () {
    let result = {};
    for (let i = 0; i < this.functions.length; i++) {
      const element = this.functions[i];
      var request = new XMLHttpRequest();
      request.open('GET', `http://localhost:8081/method/${element.id}`, false);  // `false` makes the request synchronous
      request.send(null);
      try{
        result[element.name] = eval('('+request.responseText+')')
      }catch(e){
        console.log(e)
      }
    }
    return result;
  }

}