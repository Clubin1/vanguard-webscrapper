const siteUrl = "https://shop.tcgplayer.com/cardfight-vanguard/v-eb14-the-next-stage/chronodragon-nextage?xid=pi7bd266bb-7dc7-46ed-a674-23e32d53556c"
const axios = require("axios")

const fetchData = async () => {
    const result = await axios.get(siteUrl)
    return cheerio.load(result.data)
}
const $ = await fetchData()
const postJobButton = $('.top > .action-post-job').text()
console.log(postJobButton) // Logs 'post a job'