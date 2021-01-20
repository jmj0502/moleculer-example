"use strict";
const Sequelize = require("sequelize");

const Post = {
	name: "post",
  	define: {
		title: Sequelize.STRING,
	  	content: Sequelize.TEXT,
	  	votes: Sequelize.INTEGER,
	  	status: Sequelize.BOOLEAN
	},
  	options: {}
}

module.exports = Post;
