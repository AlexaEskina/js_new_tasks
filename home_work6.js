

  function myBlend (arr) {
    for (let i = arr.length - 1; i > 0; i --) {
        let x = Math.floor (Math.random () * (i + 1));
        [arr [i], arr [x]] = [arr[x], arr[i]];
    }
  }                 
  let arr = [1,2,3,4,5,6,7,8,9];
  myBlend (arr);
  console.log (arr);

//2nd_task 

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
function findValueByKey(companyName, companyObj) { 
    for (const client of companyObj.clients) { 
        if (client.name === companyName) { 
            return client; } 
            else if (client.partners) { 
                const result = findValueByKey(companyName, { clients: client.partners }); 
                if (result) 
                return result; } } 
                return "Підкомпанія не знайдена";
    
}
                console.log(findValueByKey("Клієнт 1.2.3", company));