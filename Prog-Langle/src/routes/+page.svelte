<script lang="ts">


	let codes = [
		{
			code: `
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
		`,
			language: "css"
		},
		{
			code: `
			const person = {
			firstName:"John",
			lastName: "Doe",
			display: function () {
				let x = document.getElementById("demo");
				x.innerHTML = this.firstName + " " + this.lastName;
			}
			}

			let display = person.display.bind(person);
			setTimeout(display, 3000);
			`,
			language: "javascript"
		},
		{
			code: `SELECT City, Country FROM Customers
			WHERE Country='Germany'
			UNION ALL
			SELECT City, Country FROM Suppliers
			WHERE Country='Germany'
			ORDER BY City;
			`,
			language: "sql"
		},
		{
			code: `
			public class Main extends Thread {
				public static int amount = 0;

				public static void main(String[] args) {
					Main thread = new Main();
					thread.start();
					// Wait for the thread to finish
					while(thread.isAlive()) {
					System.out.println("Waiting...");
				}
				// Update amount and print its value
				System.out.println("Main: " + amount);
				amount++;
				System.out.println("Main: " + amount);
				}
				public void run() {
					amount++;
				}
			}
			`,
			language: "java"
		},
		{
			code: `
			$servername = "localhost";
			$username = "username";
			$password = "password";
			$dbname = "myDB";

			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
			}

			$sql = "SELECT id, firstname, lastname FROM MyGuests";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				// output data of each row
				while($row = $result->fetch_assoc()) {
					echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. ",";
				}
			} else {
				echo "0 results";
			}
			$conn->close();
			`,
			language: "php"
		},
		{
			code: `
			// Create a structure
			struct myStructure {
				int myNum;
				char myLetter;
				char myString[30];
			};

			int main() {
				// Create a structure variable and assign values to it
				struct myStructure s1 = {13, 'B', "Some text"};

				// Print values
				printf("%d %c %s", s1.myNum, s1.myLetter, s1.myString);

				return 0;
			} 
			`,
			language: "c"
		},
		{
			code: `
			// Base class
			class Animal {
				public:
					void animalSound() {
						cout << "The animal makes a sound \n";
					}
			};

			// Derived class
			class Pig : public Animal {
				public:
					void animalSound() {
						cout << "The pig says: wee wee \n";
					}
			};

			// Derived class
			class Dog : public Animal {
				public:
					void animalSound() {
						cout << "The dog says: bow wow \n";
					}
			};

			int main() {
				Animal myAnimal;
				Pig myPig;
				Dog myDog;

				myAnimal.animalSound();
				myPig.animalSound();
				myDog.animalSound();
				return 0;
			} 
			`,
			language: "c++"
		},
		{
			code: `
			enum Level 
			{
			  Low,
			  Medium,
			  High
			}

			static void Main(string[] args) 
			{
			  Level myVar = Level.Medium;
			  switch(myVar) 
			  {
			    case Level.Low:
			      Console.WriteLine("Low level");
			      break;
			    case Level.Medium:
			       Console.WriteLine("Medium level");
			      break;
			    case Level.High:
			      Console.WriteLine("High level");
			      break;
			  }
			}
			`,
			language: "c#"
		},
		{
			code: `
			# day one, the age and speed of 12 cars:
			x1 <- c(5,7,8,7,2,2,9,4,11,12,9,6)
			y1 <- c(99,86,87,88,111,103,87,94,78,77,85,86)

			# day two, the age and speed of 15 cars:
			x2 <- c(2,2,8,1,15,8,12,9,7,3,11,4,7,14,12)
			y2 <- c(100,105,84,105,90,99,90,95,94,100,79,112,91,80,85)

			plot(x1, y1, main="Observation of Cars", xlab="Car age", ylab="Car speed", col="red", cex=2)
			points(x2, y2, col="blue", cex=2) 
			`,
			language: "r"
		},
		{
			code:
			`
			interface House {
			  sqft: number;
			  yard?: {
			    sqft: number;
			  };
			}
			function printYardSize(house: House) {
			  const yardSize = house.yard?.sqft;
			  if (yardSize === undefined) {
			    console.log('No yard');
			  } else {
			    console.log(\`Yard is \${yardSize} sqft\`);
			  }
			}

			let home: House = {
			  sqft: 500
			};

			printYardSize(home); // Prints 'No yard'
			`
			,
			language: "typescript"
		},
		{
			code: `
			pub fn run(config: Config) -> Result<(), Box<dyn Error>> {
			    let contents = fs::read_to_string(config.file_path)?;

			    let results = if config.ignore_case {
			        search_case_insensitive(&config.query, &contents)
			    } else {
			        search(&config.query, &contents)
			    };
			
			    for line in results {
			        println!("{line}");
			    }
			
			    Ok(())
			}
			`,
			language: "rust"
		},
		{
			code: `
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
			`,
			language: "python"
		}
		

	]



	let date = new Date().getDate()

	let todays = codes[(date + 8) % codes.length]

	let code = todays.code

	//remove 3 tabs from the start of every line
	code = code.replace(/\n\t\t\t/g, "\n")

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
