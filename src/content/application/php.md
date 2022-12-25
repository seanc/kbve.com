---
layout: ../../layouts/theme/application.astro
title: PHP
category: Application
client: Self
publishDate: 2022-11-01 00:00:00
img: 
repo: 
description: PHP
tags:
- php
- script
---
## PHP

### Functions

#### SS_BETWEEN

```php

<?php
// Credit: AADude
 function ss_between($string,$start,$end) {
   $string=" ".$string; //The string.
   $startpos=strpos($string,$start); //Find the position of the start string.
   //Check if $startpos equals zero.
   if ($startpos == 0) {
      //If $startpos does equal zero, do this:
      return false; //Return false.
   }
   else {
      //If $startpos doesn't equal zero, do this:
      $startpos+=strlen($start); //Add the string length of $start to $startpos.
      $endpos=strpos($string,$end,$startpos)-$startpos; //Find the string position of $end.
      return substr($string,$startpos,$endpos); //Return the new value.
   }
}

// Proof of Of Concept
$source = "U:holybyteE:acid@meme.com";
$u = ss_between($source, "U:", "E:");
// $source = line 1 of text file
echo $u;
// return username
 
?>

```