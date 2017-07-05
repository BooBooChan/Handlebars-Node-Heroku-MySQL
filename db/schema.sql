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

#Joining data
SELECT `name` 
FROM `bands`
INNER JOIN `albums` ON bands.name = albums.band; #Other option includes albums.title = reviews.album, 
#Use CRUD to operate SQL data