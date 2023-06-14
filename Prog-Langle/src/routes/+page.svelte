<script lang="ts">
	let code = `
	#! /usr/bin/env python

	class BottleException(Exception):
		def __init__(self, i, c):
			self.cause = c
			self.cnt = i
			try:
				a = 1/(99-i)
				raise BottleException(i+1, self)
			except ZeroDivisionError:
				pass

		def getCause(self):
			return self.cause

		def printStackTrace(self):
			print("%d Bottle(s) of beer on the wall, %d Bottle(s) of beer" % (self.cnt, self.cnt))
			print("Take one down and pass it around,")
			print("%d Bottle(s) of beer on the wall" % (self.cnt - 1))
			try:
				self.getCause().printStackTrace()
			except AttributeError:
				pass

	try:
		raise BottleException(1, None)
	except Exception, e:
		e.printStackTrace()
	`
	let answer = "python"
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
		if (entry == answer) {
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
					//make sure a space, tab, special character or newline is before and after the word
					if (i == 0 || code[i - 1].match(/[\s\n$&+,:;=?@#|'<>.^*()%!-]/g)) {
						if (i + entry.length == code.length || code[i + entry.length].match(/[\s\n$&+,:;=?@#|'<>.^*()%!-]/g)) {
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
