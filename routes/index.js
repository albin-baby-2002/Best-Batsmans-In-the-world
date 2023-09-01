var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  const players = [

    {
      name: "DG Bradman ",
      country: "Australia",
      matches: "52",
      innings: "80",
      runs: "6996",
      highest: "334",
      average: "99.94"
    },

    {
      name: "HC Brook ",
      country: "England",
      matches: "12",
      innings: "20",
      runs: "1181",
      highest: "186",
      average: "62.15"
    },

    {
      name: "AC Voges",
      country: "Australia",
      matches: "20",
      innings: "31",
      runs: "1485",
      highest: "269",
      average: "61.87"
    },


    {
      name: "RG Pollock",
      country: "South Africa",
      matches: "23",
      innings: "41",
      runs: "2256",
      highest: "274",
      average: "60.97"
    },


    {
      name: "GA Headley",
      country: "West Indies",
      matches: "22",
      innings: "40",
      runs: "2190",
      highest: "270",
      average: "60.83"
    },
    {
      name: "H Sutcliffe",
      country: "England",
      matches: "54",
      innings: "84",
      runs: "4555",
      highest: "194",
      average: "60.73"
    },
    {
      name: "E Paynter",
      country: "England",
      matches: "20",
      innings: "31",
      runs: "1540",
      highest: "243",
      average: "59.23"
    },
    {
      name: "KF Barrington ",
      country: "England",
      matches: "82",
      innings: "131",
      runs: "6803",
      highest: "256",
      average: "58.67"
    },
    {
      name: "ED Weekes",
      country: "West Indies",
      matches: "48",
      innings: "81",
      runs: "4455",
      highest: "207",
      average: "58.61"
    },
    {
      name: "Steve Smith ",
      country: "Australia",
      matches: "102",
      innings: "181",
      runs: "9320",
      highest: "239",
      average: "58.61"
    },
    {
      name: "WR Hammond ",
      country: "England",
      matches: "85",
      innings: "140",
      runs: "7249",
      highest: "336",
      average: "58.45"
    },
    {
      name: "GS Sobers ",
      country: "West Indies",
      matches: "93",
      innings: "160",
      runs: "8032",
      highest: "365",
      average: "57.78"
    },
    {
      name: "KC Sangakkara",
      country: "Srilanka",
      matches: "134",
      innings: "233",
      runs: "12400",
      highest: "319",
      average: "57.40"
    }



  ]



  res.render('index', { players });
});

module.exports = router;
