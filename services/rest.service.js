"use strict";

module.exports = {
	
  name:"rest",
  settings: {},
  dependencies: [],
  actions: {
	
	getPosts: {
		rest: {
			method: "GET",
		  	path: "/posts"
		},
	  	async handler(ctx) {
		  	//Call parameters: nombreDelServicio.metodoAUtilizar.
			const posts = await ctx.call("posts.find");
		  	return posts;
		}
	},
	generatePost: {
		rest: {
			method: "POST",
		  	path: "/posts"
		},
	  	//This is the validation of our request fields. We can use Joi instead.
		params: {
			title: {type: "string", min: 2},
		  	content: {type: "string", min: 5},
			votes: {type: "number", positive:true, integer:true},
		  	status: "boolean"
		},
	  	async handler(ctx) {
		  	const newPost = ctx.params;
		  	await ctx.call("posts.create", newPost);
		  	//Event handling. The reverse side of this thing can be found on the greeter service events.
		    //Here we are emiting to every suscriber of the generatePost.called event.
		  	ctx.emit("generatePost.called", newPost, ["greeter"]);
		  	return newPost;
		}
	},
	getPost: {
	  	//This is how we get the params of a request.
		rest: "GET /posts/:id",
	  	params: {
			id: "string",
		},
	  	async handler(ctx) {
		  const post = await ctx.call("posts.get", {id:ctx.params.id});
		  return post;
		}
	},
	updatePost: {
		rest: "PUT /posts/:id",
	  	params: {
			id: "string",
		},
	  	async handler(ctx) {
			const updatedPost = await ctx.call("posts.update", {id: ctx.params.id, ...ctx.params});
		  	return updatedPost;
		}
	},
	deletePost: {
		rest: "DELETE /posts/:id",
	  	params: {
			id: "string",
		},
	  	async handler(ctx) {
			const deletedPost = await ctx.call("posts.remove", {id: ctx.params.id});
		  	return deletedPost;
		}
	}
  },
  events: {}
	
}
