<script lang="ts">



	// Import the functions you need from the SDKs you need

	import { initializeApp } from "firebase/app";

	import { getAnalytics } from "firebase/analytics";

	//use firestore to get guesses from
	import { getFirestore, collection, getDoc, doc } from 'firebase/firestore/lite';


	// Your web app's Firebase configuration

	// For Firebase JS SDK v7.20.0 and later, measurementId is optional

	//This can be public as it is sent to the client side browser anyway 
	const firebaseConfig = {
		apiKey: "AIzaSyBDWMkoDZKN3m4HVjBz1yn8NILFJS13qtc",
		authDomain: "proglangle.firebaseapp.com",
		projectId: "proglangle",
		storageBucket: "proglangle.appspot.com",
		messagingSenderId: "395741944782",
		appId: "1:395741944782:web:ed335a50111265a59fe99f",
		measurementId: "G-MRLSVCCTSD"
	};


	// Initialize Firebase

	const app = initializeApp(firebaseConfig);


	//get firestore instance
	const db = getFirestore(app);

	//get collection of guesses
	const guessesCol = collection(db, 'dailyChallenges');

	const now = new Date()

	//get the local date in ISO format
	const todayISO = now.getFullYear()
	
	//add a 0 to the month if it is less than 10
	+ "-" + (now.getMonth() + 1 < 10 ? "0" : "") + (now.getMonth() + 1)

	//add a 0 to the day if it is less than 10
	+ "-" + (now.getDate() < 10 ? "0" : "") + now.getDate()

	//get the document reference for the challenge for today
	const docRef = getDoc(doc(guessesCol, todayISO)).then((doc) => {
		if (doc.exists()) {
			console.log("Document data:", doc.data());
			todays = doc.data().problem;


			code = todays.code.split("```")[1].split("\n").slice(1, -1).join("\n")



			//remove 3 tabs from the start of every line
			code = code.replace(/\n\t\t\t/g, "\n")

			answer = todays.language
			entry = ""

			//replace every character, except for newlines, spaces and tabs
			hidden = code.replace(/[^\n \t]/g, "▮")


		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch((error) => {
		console.log("Error getting document:", error);
	});



	let date = new Date().getDate()

	let todays = {code: "", language: ""}

	let code = ""

	let answer = todays.language
	let entry = ""

	//replace every character, except for newlines, spaces and tabs
	let hidden = code.replace(/[^\n \t]/g, "▮")

	let guesses: {
		name: String, 
		quantity: Number
		}[] = []
	

	function handleGuess() {
		let quantity = 0

		//trim the guess
		entry = entry.trim()

		//check if the guess is correct
		if (entry.toLowerCase() == answer.toLowerCase()) {
			hidden = code
			return
		}

		//make sure there are no spaces in the guess
		if (entry.includes(" ")) {
			entry = ""
			alert("Please enter a single word")
			return
		}

		//make sure the guess is not empty
		if (entry == "") {
			alert("Please enter a guess, this could be a programming language, word or syntax used in the language")
			return
		}

		//if the guess is a special character, show all hidden occurences of that character
		if (entry.length == 1 && entry.match(/[^\w\s]/g)) {
			for (let i = 0; i < code.length; i++) {
				if (code[i] == entry) {
					hidden = hidden.substring(0, i) + code[i] + hidden.substring(i + 1)
					quantity++
				}
			}
		}
		else {
			//if the guess is a word, show all hidden occurences of that word
			for (let i = 0; i < code.length; i++) {
				if (code.substring(i, i + entry.length).toLowerCase() == entry.toLowerCase()) {
					//make sure the character before and after the word are not letters
					if (i == 0 || !code[i - 1].match(/[a-z]/i) ) {
						if (i + entry.length == code.length || !code[i + entry.length].match(/[a-z]/i)) {
							hidden = hidden.substring(0, i) + code.substring(i, i + entry.length) + hidden.substring(i + entry.length)
							quantity++
						}
					}
				}
			}
		}

		guesses.push({name: entry, quantity: quantity})
		guesses = guesses;

		entry = ""
	}

	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>



<section>
	<div class="center">
		<h1>Prog-Langle</h1>
		<h2>The programming language guessing game</h2>
		
	

		<pre class="code">{@html hidden.replaceAll("▮", "<span style='background-color: black'>#</span>")}</pre>



		<p>
			<input 
				bind:value={entry} 
				placeholder="language, word or syntax" 
				on:keydown={e => {if (e.key == "Enter") handleGuess()}} 
				/>

			<button on:click={handleGuess}>Guess</button>
		</p>

		<h2>{guesses.length} guesses</h2>

		<table>
			{#each guesses as guess}
				<tr>
					<td>{guess.name}</td>
					<td>|</td>
					<td>{guess.quantity}</td>
				</tr>
			{/each}
		</table>


		<footer>
			<p>By Johannes Nicholas: <a href="https://joeyn.dev">joeyn.dev</a></p>
			<p>Source Code: <a href="https://github.com/JohannesNicholas/Prog-Langle">github.com/JohannesNicholas/Prog-Langle</a></p>
		</footer>

	</div>
	
	

	
</section>



<style>
	.center {
		width: 100%;
		align-items: center;
		display: flex;
		flex-direction: column;
		font-family: 'Roboto', sans-serif;
		color: grey;
	}

	h1 {
		font-size: 3rem;
	}

	h2 {
		font-size: 1.5rem;
	}

	.code {
		font-family: 'Courier New', monospace;
		font-size: 0.8rem;
		color: black;
		line-height: 1.2rem;
		max-width: 100%;
		overflow: scroll;
	}

	table {
		font-family: 'Courier New', monospace;
	}

	footer {
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 0.8rem;
	}
	
	
</style>
