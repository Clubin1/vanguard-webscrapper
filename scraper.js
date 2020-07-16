const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = 'https://shop.tcgplayer.com/cardfight-vanguard/v-eb14-the-next-stage/chronodragon-nextage?xid=pi7bd266bb-7dc7-46ed-a674-23e32d53556c'

const names = new Set()
const info = new Set()
const prices = new Set()

const fetchData = async () => {
    const result = await axios.get(siteUrl)
    return cheerio.load(result.data)
}

const getResults = async () => {
    const $ = await fetchData()

    $('.product-details__name').each((index, element) => {
        names.add($(element).text())
    })
    
    $('.product-description__value').each((index, element) => {
        info.add($(element).text())
    })
        
    $('.price-point__data').each((index, element) => {
        prices.add($(element).text())
    })
    console.log(prices)
return {
    names: [...names].sort(),
    info: [...info].sort(),
    prices: [...prices].sort(),
    }
}
module.exports = getResults;

