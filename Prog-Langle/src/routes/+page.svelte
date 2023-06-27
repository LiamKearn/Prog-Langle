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
		},
		{
			code:
			`
			#!/bin/bash
			## Koen Noens, december 2007
			##  Lyrics for "99 bottles of beer"
			#
			#   GNU bash shell
			# 	functions (can be recursive)
			# 	built-in string manipulation
			#	built-in arithmetic operations
			#


			function drinkBeer() {
			
				howmany=$1
				txt1=" of beer on the wall"
				txt2="take one down, pass it around"
				txt3="go to the shop and buy some more"

				# sing
				bottles $howmany ; echo "$txt1"
				bottles $howmany ; echo "\${txt1:0:9}" 
			
				# continue drinking or go to the shop ? 
				if [[ howmany -gt 0 ]]; then
					howmany=$(($1 - 1))	
					nowwhat=$txt2
				else
					howmany=99
					nowwhat=$txt3
					STOP="x" 		#comment this to continue endlessly
				fi 
			
				# keep drinking
				echo "$nowwhat"
				bottles $howmany ; echo "$txt1" ; echo -e 

				[[ "$STOP" == "x" ]] || drinkBeer $howmany
				# last line has test ([[ ]]) to avoid endless loop
				# whitout it, song just restarts with 99 bottles, forever.
			}

			# manage syntax and spelling correction
			function bottles() {
				case $1 in
					1) echo -n "one bottle" ;;
					0) echo -n "no more bottles" ;;
					*) echo -n "$1 bottles" ;;
				esac
			}


			# start song
			drinkBeer 99
			`
			,
			language: "bash"

		},
		{
			code: `
			 10 REM Basic version of 99 bottles of beer
			 20 REM Modified by M. Eric Carr (eric@carrnet.net)
			 30 REM from prior version found on this site.
			 40 REM (Modified to correct "1 bottle" grammar)
			 50 FOR X=99 TO 1 STEP -1
			 60 PRINT X;"bottle";
			 70 IF X<>1 THEN PRINT "s";
			 80 PRINT " of beer on the wall,";X;"bottle";
			 90 IF X<>1 THEN PRINT "s";
			100 PRINT " of beer"
			110 PRINT "Take one down and pass it around,"
			120 PRINT X-1;"bottle";
			130 IF X<>1 THEN PRINT "s";
			140 PRINT " of beer on the wall"
			150 NEXT
			`
			,
			language: "basic"
		},
		{
			code: `
			-- Just for amusement, here's a multi-tasking version.
			-- Ten customers enter bar to sing and drink.  Bartender serializes
			-- access to 'take one down' to avoid fights
			-- contributed by tmoran@bix.com
			with Text_IO;
			procedure Bar is

			  Out_Of_Beer : Exception;

			  protected Bartender is
			    function Count return Integer;
			    procedure Take_One_Down;
			  private
			    Remaining : Integer range 0 .. 99 := 99;
			  end Bartender;

			  protected body Bartender is
			    function Count return Integer is
			    begin return Remaining; end Count;

			    procedure Take_One_Down is
			    begin
			      if Remaining = 0 then raise Out_Of_Beer;
			      else Remaining := Remaining - 1;
			      end if;
			    end Take_One_Down;
			  end Bartender;

			  type Names is (Charles, Ada, John, Grace, Donald,
			                 Edsger, Niklaus, Seymour, Fred, Harlan);

			  task type Customers is
			    entry Enter_Bar(Who : in Names);
			  end Customers;

			  Customer_List : array(Names) of Customers;

			  task body Customers is
			    Me : Names;
			    procedure Sing_And_Drink(Singer_ID : in String) is
			      procedure Sing(S : in String) renames Text_IO.Put_Line;
			    begin
			      loop
			        declare
			          Bottle_Part : constant String
			            := Integer'image(Bartender.Count) & " bottles of beer";
			        begin
			          Sing(Bottle_Part & " on the wall" & Singer_ID);
			          Sing(Bottle_Part & Singer_ID);
			        end;
			        Sing(" Take one down and pass it arround" & Singer_ID);
			        Bartender.Take_One_Down;
			        delay 10.0;  -- allow ten seconds to gulp one down
			      end loop;
			    exception
			      when Out_Of_Beer => Sing("no more beer!" & Singer_ID);
			    end Sing_And_Drink;
			  begin -- customer task
			    accept Enter_Bar(Who : in Names) do
			      Me := Who;
			    end Enter_Bar;
			    Sing_And_Drink(" - " & Names'image(Me));
			  end Customers;

			begin -- operating bar

			  for Person in Customer_List'range loop
			    Customer_List(Person).Enter_Bar(Person);
			    delay 2.0; -- allow two seconds between customers entering bar
			  end loop;

			end Bar;`
			,
			language: "ada"

		},
		{
			code:
			`
			bottles 0 = "no more bottles"
			bottles 1 = "1 bottle"
			bottles n = show n ++ " bottles"

			verse 0   = "No more bottles of beer on the wall, no more bottles of beer.\n"
			         ++ "Go to the store and buy some more, 99 bottles of beer on the wall."

			verse n   = bottles n ++ " of beer on the wall, " ++ bottles n ++ " of beer.\n"
			         ++ "Take one down and pass it around, " ++ bottles (n-1)
			                                                 ++ " of beer on the wall.\n"

			main      = mapM (putStrLn . verse) [99,98..0]
			`
			,
			language: "haskell"
		},
		{
			code: `
			program BottlesOfBeer (output);
			{this program plays the 99 bottles of beer song}

			const
			  BOTTLESSTART = 99;
			  BOTTLESEND = 1;

			type
			  tBottles = BOTTLESEND..BOTTLESSTART;

			var
			  bottles : tBottles;

			begin
			  for bottles := BOTTLESSTART downto BOTTLESEND do
			  begin
			    if bottles > 1 then
			    begin
			      writeln (bottles,' bottles of beer on the wall, ',bottles, ' bottles of beer.');
			      write ('Take one down, pass it around, ');
			      writeln (bottles - 1, ' bottles of beer on the wall.');
			      writeln
			    end
			    else
			    begin
			      writeln ('1 bottle of beer on the wall, one bottle of beer.');
			      writeln ('Take one down, pass it around, no more bottles of beer on the wall');
			      writeln;
			      writeln ('No more bottles of beer on the wall, no more bottles of beer.');
			      writeln ('Go to the store and buy some more, 99 bottles of beer on the wall.')    
			    end
			  end
			end.
			`
			,
			language: "pascal"
		},
		{
			code: `
				#light

				let bottleStr bottles = 
				    match bottles with
				    | 0 -> "no more bottles"
				    | 1 -> "1 bottle"
				    | _ -> bottles.ToString() + " bottles"

				let verse n =
				    match n with
				    | 0 -> "No more bottles of beer on the wall, no more bottles of beer.\n" +
				           "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
				    | _ -> bottleStr n + " of beer on the wall, " + bottleStr n + " of beer.\n" +
				           "Take one down and pass it around, " + bottleStr (n-1) + 
				           " of beer on the wall.\n"

				List.iter (printfn "%s") [for v in [99..-1..0] -> verse v]
			`
			,
			language: "f#"
		},
		{
			code: 
			`
			/*
			 * 99 Bottles of Beer written in Objective-C for Mac OS X.
			 * Should work on most OpenStep environments as well.
			 *
			 * Please note that since Objective-C is a superset of C, all
			 * C versions are valid Objective-C as well. Therefore, this
			 * version is written in fancy OO, and using NSLog rather than
			 * printf for optimum uglyness.
			 *
			 * Compiles on Mac OS X with "gcc -framework Foundation 99Bottles.m"
			 *
			 * (c) 2002 Dan Christiansen
			 */

			#import <Foundation/Foundation.h>

			@class BeerBottle;
			@class BeerWall;

			@interface BeerWall : NSObject
			{
			    NSMutableArray *bottles;
			}
			+ (BeerWall *)wallWithBottles:(int)nbottles;
			- (int)bottles;
			- (BeerBottle *)getBottle;
			- (void)throwParty;
			@end

			@interface BeerBottle : NSObject
			{
			    BOOL full;
			}
			- (void)chug;
			@end

			@implementation BeerWall
			- (id)initWithBottles:(int)nbottles
			{
			    self = [super init];
			
			    bottles = [NSMutableArray arrayWithCapacity:99];
			
			    int i;
			    for (i = 0; i < 99; i++) {
			        [bottles addObject:[[[BeerBottle alloc] init] retain]];
			    }
			
			    return self;
			}

			+ (BeerWall *)wallWithBottles:(int)nbottles
			{
			    return [[BeerWall alloc] initWithBottles:nbottles];
			}

			- (int)bottles
			{
			    return [bottles count];
			}

			- (BeerBottle *)getBottle
			{
			    BeerBottle *bottle = [bottles lastObject];
			    [bottles removeLastObject];
			    [bottle release];
			    return [bottle autorelease];
			}
			- (void)throwParty
			{
			    /* Objective-C is only supposed to handle 63 recursive calls - we do 99.
			    * Life's a bitch.
			    */
			
			    switch([self bottles]) {
			        case 1:
			            NSLog(@"1 bottles of beer on the wall, 1 bottles of beer,");
			            NSLog(@"Take one down pass it around,");
			            [[self getBottle] chug];
			            NSLog(@"No bottles of beer on the wall.",
			                  [self bottles], [self bottles]);
			            NSLog(@"");
			            break;
			        default:
			            NSLog(@"%d bottles of beer on the wall, %d bottles of beer,",
			                  [self bottles], [self bottles]);
			            NSLog(@"Take one down pass it around,");
			            [[self getBottle] chug];
			            NSLog(@"%d bottles of beer on the wall.",
			                  [self bottles], [self bottles]);
			            NSLog(@"");
			            [self throwParty];
			            break;
			    }
			
			    return;
			}
			@end

			@implementation BeerBottle
			- (id)init
			{
			    self = [super init];
			    srand(time(0));
			    full = YES;
			    return self;
			}

			- (void)chug
			{
			    if (full) {
			        if (rand()/(double)RAND_MAX < 0.025)
			            NSLog(@"BUUUUUUUUURP!");
			        full = NO;
			    } else {
			        printf("WTF!? This bottle's empty!!!\n");
			    }
			}
			@end

			int main()
			{
			    NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
			
			    [[BeerWall wallWithBottles:99] throwParty];
			
			    [pool release];
			}
			`,
			language: "objective-c"
		},
		{
			code: `
			const std = @import("std");
			const parseInt = std.fmt.parseInt;

			test "parse integers" {
			    const input = "123 67 89,99";
			    const ally = std.testing.allocator;
			
			    var list = std.ArrayList(u32).init(ally);
			    // Ensure the list is freed at scope exit.
			    // Try commenting out this line!
			    defer list.deinit();
			
			    var it = std.mem.tokenize(u8, input, " ,");
			    while (it.next()) |num| {
			        const n = try parseInt(u32, num, 10);
			        try list.append(n);
			    }
			
			    const expected = [_]u32{ 123, 67, 89, 99 };
			
			    for (expected, list.items) |exp, actual| {
			        try std.testing.expectEqual(exp, actual);
			    }
			}
			`
			,
			language: "zig"
		}
		

	]



	let date = new Date().getDate()

	let todays = codes[(date + 4) % codes.length]

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
