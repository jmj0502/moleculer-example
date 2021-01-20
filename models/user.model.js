//Using stric mode on ESLint.
"use strict";

const Sequelize = require("sequelize");

//Defining our user model (In a different way, since this approach will take advantage of the moleculer adapter).
export const User = {
	name: "User",
  	define: {
		username: Sequelize.STRING,
	  	password: Sequelize.STRING,
	  	fullName: Sequelize.STRING,
		email: Sequelize.STRING,
	  	author: {
			type: Sequelize.BOOLEAN,
			defaultValue: false
		},
	  	avatar: Sequelize.STRING,
	  	timestamps: {
			type: Sequelize.DATE,
		  	defaultValue: Sequelize.NOW
		}	
	}
}
