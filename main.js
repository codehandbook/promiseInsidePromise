const helper = require('./helper')

function getUserPostDetails() {
	return helper.make_API_call('https://jsonplaceholder.typicode.com/users')
	.then((users) => {
		let promises = []
		users.forEach((user) => {
			promises.push(helper.make_API_call('https://jsonplaceholder.typicode.com/posts?userId=' + user.id))
		})
		return Promise.all(promises)
	})
}

getUserPostDetails()
.then((result) => {
	console.log('result is ',result)
})