var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var json =
		[
			{
				photo: "images/vans.png",
				name: "Vans Disney", 
				price: "Rp 720.000",
				comment: "2",
				loved: "7"
			},
			{
				photo: "images/poster.png",
				name: "Poster Kayu Tema Vespa", 
				price: "Rp 175.000",
				comment: "0",
				loved: "4"
			},
			{
				photo: "images/preloved.png",
				name: "Preloved TOPSHOP", 
				price: "Rp 650.000",
				comment: "0",
				loved: "7"
			},
			{
				photo: "images/dk084.png",
				name: "DK084", 
				price: "Rp 160.000",
				comment: "0",
				loved: "4"
			},
			{
				photo: "images/jaket.png",
				name: "Jaket Jeans", 
				price: "Rp 110.000",
				comment: "0",
				loved: "4"
			}
		];
		
	res.render('lovelist', { data: json });
});

module.exports = router;
