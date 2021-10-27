const URL = 'https://jsonplaceholder.typicode.com/users';
const URL_POST = 'https://jsonplaceholder.typicode.com/posts?userId=';
const POSTS = document.getElementById('posts');
const USERS = document.getElementById('users');

const getData = (url, type) => {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			if (type == 'users') {
				afficherUser(data);
				clickUser();
			} else if (type == 'posts') {
				console.log(data);
				afficherPost(data);
			}
			//console.log(data);
		});
};

const afficherUser = (users) => {
	//console.log(users);
	for (const user of users) {
		//console.log(user);
		USERS.innerHTML += `
		<div class="userWrapper">
				<div class="user">
					<h3 class="name">${user.name}</h3>
					<em class="username">${user.username}</em>
					<span class="email">${user.email}</span>
					<span class="website">${user.website}</span>
					<button class="btn" id=${user.id}>See Posts</button>
				</div>
			</div>
	`;
	}
};

const clickUser = () => {
	const CLICK = document.querySelectorAll('button');
	//console.log(CLICK);
	for (const cl of CLICK) {
		cl.addEventListener('click', (evt) => {
			//console.log(evt.target.id);
			let id = evt.target.id;
			getPosts(id);
		});
	}
};

const getPosts = (id) => {
	getData(URL_POST + id, 'posts');
};

const afficherPost = (posts) => {
	POSTS.innerHTML = '';
	for (const po of posts) {
		POSTS.innerHTML += `
		<div class="post">
			<h4 class="post_title">${po.title}</h4>
			<p class="post_body">${po.body}</p>
		</div>
	`;
	}
};

getData(URL, 'users');
