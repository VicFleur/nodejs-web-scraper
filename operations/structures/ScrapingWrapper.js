// const ScrapingAction = require('./ScrapingAction');//For JsDoc.

// /**
//  * This is the structure that needs to be returned by any Operation.scrape() function.
//  * Aggregates ScrapingActions
//  */

// class ScrapingWrapper{

//     /**
//      * @param {object} params
//      * @param {string} params.type 
//      * @param {string} params.name 
//      * @param {string} params.address 
//      * @param {ScrapingAction[]} params.data 
//      */
//     constructor({type,name,address,data}) {
//         this._identifier= 'ScrapingWrapper'
//         this.type = type;
//         this.name = name;
//         this.address = address;
//         this.data = data;
       
//     }

//     // getData(){
//     //     const data = []
//     //     // return this.data.map(scrapingAction=>[...scrapingAction.getData()])
//     //     for(let action of this.data){
//     //         data.push(...action.getData())
//     //     }

//     //     return data;
//     // }
// }

// module.exports = ScrapingWrapper