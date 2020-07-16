const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl2 = 'https://shop.tcgplayer.com/cardfight-vanguard/v-eb14-the-next-stage/steam-breath-dragon?xid=pdbe4e1f3c84e49c1890924af1c436bb9'

const names2 = new Set()
const info2 = new Set()
const prices2 = new Set()

const fetchData2 = async () => {
    const result2 = await axios.get(siteUrl2)
    return cheerio.load(result2.data)
}

const getResults2 = async () => {
    const $2 = await fetchData2()

    $2('.product-details__name').each((index, element) => {
        names2.add($2(element).text())
    })
    
    $2('.product-description__value').each((index, element) => {
        info2.add($2(element).text())
    })
        
    $2('.price-point__data').each((index, element) => {
        prices2.add($2(element).text())
    })
    console.log(prices2)
return {
    names2: [...names2].sort(),
    info2: [...info2].sort(),
    prices2: [...prices2].sort(),
    }
}
module.exports = getResults2;

