"use stric";

const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");


//Generating a new Service.
module.exports = {
	name: "posts",
  	mixins: [DbService],
	adapter: new SqlAdapter("moleculer_sequelize", "root", "27676046Mar$", {
		host: "localhost",
	  	dialect: "mysql",
	  	pool: {
			max:5,
		  	min:0,
		  	idle:10000
		}
	}),
  	model: {
	  name: "post",
	  define: {
		  title: Sequelize.STRING,
		  content: Sequelize.TEXT,
		  votes: Sequelize.INTEGER,
		  status: Sequelize.BOOLEAN
	  },
	  options: {}
  }, 
  settings: ["id", "title", "content", "votes", "status"],
};
