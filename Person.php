<?php

class Person
{
  private $name;
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $lastname, $age, $mother=null, $father=null)
  {
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
    $this->hp = 100;
  }

  function sayHi($name)
  {
    return "Hi $name, I`m " . $this->name;
  }
  function setHp($hp) {
    if ($this->hp + $hp >= 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp() {
    return $this->hp;
  }
  function getName() {
    return $this->name;
  }
  function getLastname()
  {
    return $this->lastname;
  }
  function getMother() {
    return $this->mother;
  }
  function getFather() {
    return $this->father;
  }
  function getInfo() {
    return "<h3>Пара слов обо мне: </h3><br>" . "<h4>Мое имя: </h4>". 
    $this->getName() . "<br><h4>Моя фамилия: </h4>" . 
    $this->getLastname() . "<br><h4>Моего папу зовут: </h4>" . 
    $this->getFather()->getName() . "<br><h4>Мою маму зовут: </h4>" . 
    $this->getMother()->getName() . "<br><h4>Моего дедушку по маме зовут: </h4>" . 
    $this->getMother()->getFather()->getName() . " " . 
    $this->getMother()->getFather()->getLastname() . "<br><h4>Мою бабушку по маме зовут: </h4>" . 
    $this->getMother()->getMother()->getName() . " " . 
    $this->getMother()->getMother()->getLastname() .  "<br><h4>Моего дедушку по папе зовут: </h4>" . 
    $this->getFather()->getFather()->getName() . " " . 
    $this->getFather()->getFather()->getLastname() . "<br><h4>Мою бабушку по папе зовут: </h4>" . 
    $this->getFather()->getMother()->getName() . " " . 
    $this->getFather()->getMother()->getLastname();
  }
}

$vera = new Person("Vera", "Petrova", 65);
$nikolay = new Person("Nikolay", "Petrov", 68);
$nina = new Person("Nina", "Ivanova", 73);
$alex = new Person("Alex", "Ivanov", 72);
$igor = new Person("Igor", "Petrov", 40, $vera, $nikolay);
$olga = new Person("Olga", "Petrova", 38, $nina, $alex);
$marina = new Person("Marina", "Petrova", 10, $olga, $igor);

echo $marina->getInfo();
