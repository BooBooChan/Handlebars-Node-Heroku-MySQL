#include mySQL in this document

DROP DATABASE IF EXISTS `death_metal`;
CREATE DATABASE `death_metal`;
USE `death_metal`;


);#subject to change. We need the datasets before we can decide what to do w/ this data.

SELECT * FROM `albums`;#Columns are id, band, title, year
SELECT * FROM `bands`;#Columns are id, name, country, status, formed_in, genre, theme, active
SELECT * FROM `reviews`;#Columns are id, album, title, score, content
#Make sure to have at least 1 JOIN command
#CSV files go to "seeds" file, NOT HERE.
#To clarify instructions, "foreign keys" refer to sql keys (e.g. PRIMARY KEY) which allow columns of different tables/datasets to be joined together. So just find a dataset whose columns share a common key and make joints easy.
#Manipulate this data. This will probably be moved to the models sheet later.
#Joining data

#This join will disply to users who want to look up any band.
SELECT `id`, `country`, `name`, `theme` FROM `bands`;
INNER JOIN `albums` ON bands.name = albums.band; #Other option includes albums.title = reviews.album, and you can create new foreign keys
ORDER BY `bands.id` ASC;

#This will display album reviews to users, from most positive to most negative
SELECT * FROM `albums`;
INNER JOIN `reviews` ON `albums.name` = `reviews.album`;			
ORDER BY `reviews.score` DESC;

#Maybe we can fetch review info focusing on instruments of users' interest. See if you can retrieve reviews focusing on guitar, bass, drums, singing.
SELECT * FROM `reviews` WHERE `content` LIKE `%guitar%`, `%drum%`, `%bass%`, `%sing%`;

#I saw some f-bombs in those reviews. Can we filter out reviews containing explicit words for the wary parent raising their kids on death metal? F%*&!
SELECT * FROM `reviews` WHERE NOT `content` LIKE `%fuck%`, `%shit%`, `%asshole%`, `%whore%`, `%porn%`;

#Let's find the brutal old farts who probably should have retired decades ago.
SELECT `id`, `name`, `formed_in`, `active`, ``FROM `bands` WHERE `active` LIKE `%present`;
ORDER BY `formed_in` ASC, `name` ASC;

#Use CRUD to operate SQL data



#Bin of stuff not to do with our data (for now. I'm sure some of this is feasible but too complicated this early in the game)
#"SELECT ``, ``, ``, ``, ``, ``, FROM (INNERJOINED tables)" No! Do not try to select from tables already joined.

