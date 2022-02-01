// 1.Найти все методы которые используются для работы со строками String в JS с одним примером
//

// 1) String.prototype.at() принимает целочисленное значение и возвращает новую строку, состоящую из одной единицы кода UTF-16. Отрицательные целые числа отсчитываются от последнего символа строки.
const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;

console.log(
  `Using an index of ${index} the character returned is ${sentence.at(index)}`
);
// expected output: "Using an index of 5 the character returned is u"

index = -4;

console.log(
  `Using an index of ${index} the character returned is ${sentence.at(index)}`
);
// expected output: "Using an index of -4 the character returned is d"

// 2) String.prototype.charAt() возвращает новую строку, состоящую из одной единицы кода UTF-16, расположенной по указанному смещению в строке. (по индексу, начиная с 0, пробелы учитываются)
let anyString = "Brave new world";
console.log("The character at index 0   is '" + anyString.charAt() + "'"); //The character at index 0   is 'B'

// No index was provided, used 0 as default
console.log("The character at index 0   is '" + anyString.charAt(0) + "'"); //The character at index 0   is 'B'
console.log("The character at index 1   is '" + anyString.charAt(1) + "'"); //The character at index 1   is 'r'
console.log("The character at index 2   is '" + anyString.charAt(2) + "'"); //The character at index 2   is 'a'
console.log("The character at index 3   is '" + anyString.charAt(3) + "'"); //The character at index 3   is 'v'
console.log("The character at index 4   is '" + anyString.charAt(4) + "'"); //The character at index 4   is 'e'
console.log("The character at index 999 is '" + anyString.charAt(999) + "'"); //The character at index 999 is ''

// 3) String.prototype.charCodeAt() возвращает целое число от 0 до 65535, представляющее кодовую единицу UTF-16 с заданным индексом.

const sentence = "The quick brown fox jumps over the lazy dog.";
const index = 4;
console.log(
  `The character code ${sentence.charCodeAt(
    index
  )} is equal to ${sentence.charAt(index)}`
);
// expected output: "The character code 113 is equal to q"

// 4) String.prototype.codePointAt() возвращает неотрицательное целое число, которое является значением кодовой точки Unicode в данной позиции.

const icons = "☃★♲";

console.log(icons.codePointAt(1));
// expected output: "9733"

// 5) String.prototype.concat() объединяет строковые аргументы в вызывающую строку и возвращает новую строку.
const str1 = "Hello";
const str2 = "Julia";

console.log(str1.concat(", ", "dear ", str2)); // Hello, dear Julia

// 6) String.prototype.endsWith() определяет, заканчивается ли строка символами указанной строки, возвращая true или false в зависимости от ситуации.

const str1 = "Cats are the best!";

// endsWith(searchString, length)
console.log(str1.endsWith("best", 17)); //true

const str2 = "Is this a question";

// endsWith(searchString)
console.log(str2.endsWith("?")); //false

// 7) String.prototype.includes() выполняет поиск с учетом регистра, чтобы определить, можно ли найти одну строку в другой строке, возвращая true или false в зависимости от ситуации.

const sentence = "Hello INC4";
const word = "people";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
); // The word "people" is not in the sentence

// 8) String.prototype.indexOf() - индекс первого вхождения указанной подстроки в позиции, большей или равной позиции, которая по умолчанию равна 0
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "the";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(
  `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
); // The index of the first "the" from the beginning is 31

console.log(
  `The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
); //The index of the 2nd "the" is 48

// 9) String.prototype.lastIndexOf() ищет всю вызывающую строку и возвращает индекс последнего вхождения указанной подстроки

const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "the";
console.log(
  `The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(
    searchTerm
  )}`
); // The index of the first "the" from the end is 48

// 10) String.prototype.localeCompare() возвращает число, указывающее, идет ли ссылочная строка до или после или совпадает с заданной строкой в ​​порядке сортировки.

const a = "INC4"; // with accents, lowercase
const b = "cat54"; // no accents, uppercase

console.log(a.localeCompare(b)); //1

// 11) String.prototype.match() извлекает результат сопоставления строки с регулярным выражением.

const paragraph =
  "Some say thy fault is youth, some wantonness Both grace and faults are loved";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found); // ['S', 'B']

// 12) String.prototype.matchAll() возвращает итератор всех результатов, совпадающих со строкой и регулярным выражением, включая захваченные группы.

// 13) String.prototype.normalize() возвращает форму нормализации Unicode строки.
let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ
console.log(string1 === string2); // false

let normalizedString1 = string1.normalize("NFC");
let normalizedString2 = string2.normalize("NFC");
console.log(normalizedString1 === normalizedString2); // true

// 14) String.prototype.padEnd() дополняет текущую строку заданной строкой (при необходимости повторяя), чтобы результирующая строка достигла заданной длины
"INC4".padEnd(16, "!"); //'INC4!!!!!!!!!!!!'

// 15) String.prototype.padStart() тоже самое, но впереди
"INC4".padStart(16, "!");
("!!!!!!!!!!!!INC4");

// 16) String.prototype.repeat() создает и возвращает новую строку, содержащую указанное количество копий строки, для которой он был вызван, объединенных вместе.
"training".repeat(5); //'trainingtrainingtraining'

//17) String.prototype.replace() новую строку, в которой некоторые или все совпадения шаблона заменены заменой
"Some say thy fault is youth, some wantonness".replace("say", "ask"); //'Some ask thy fault is youth, some wantonness'

//18) String.prototype.replaceAll() возвращает новую строку, в которой все совпадения шаблона заменены заменой
"some say thy fault is youth, some wantonness".replaceAll("some", "we"); //'we say thy fault is youth, we wantonness'

//19) String.prototype.search() выполняет поиск соответствия между регулярным выражением и этим объектом String.

//20) String.prototype.slice() извлекает часть строки и возвращает ее как новую строку без изменения исходной строки.
"Some say thy fault is youth, some wantonness".slice(5, 19); //'say thy fault '

//21) String.prototype.split() делит строку на упорядоченный список подстрок, помещает эти подстроки в массив и возвращает массив
"Some say thy fault is youth, some wantonness".split(" "); // ['Some', 'say', 'thy', 'fault', 'is', 'youth,', 'some', 'wantonness']
"Some say thy fault is youth, some wantonness".split(""); //['S', 'o', 'm', 'e', ' ', 's', 'a', 'y', ' ', 't', 'h', 'y', ' ', 'f', 'a', 'u', 'l', 't', ' ', 'i', 's', ' ', 'y', 'o', 'u', 't', 'h', ',', ' ', 's', 'o', 'm', 'e', ' ', 'w', 'a', 'n', 't', 'o', 'n', 'n', 'e', 's', 's']

//22) String.prototype.startsWith() определяет, начинается ли строка с символов указанной строки, возвращая true или false в зависимости от ситуации.
"Some say thy fault is youth, some wantonness".startsWith("some"); //false

//23) String.prototype.substring() возвращает часть строки между начальным и конечным индексами или до конца строки.
"Some say thy fault is youth, some wantonness".substring(2, 33); //'me say thy fault is youth, some'

//24) String.prototype.toLowerCase() преобразовывает в нижний регистр
"Some say thy fault is youth, some wantonness".toLowerCase(); //'some say thy fault is youth, some wantonness'

//25) String.prototype.toUpperCase()преобразовывает в верхний регистр
"Some say thy fault is youth, some wantonness".toUpperCase(); //'SOME SAY THY FAULT IS YOUTH, SOME WANTONNESS'

//26) String.prototype.toLocaleLowerCase() возвращает значение строки вызова, преобразованное в нижний регистр, в соответствии с любым сопоставлением регистра, зависящим от локали.
"Some say thy fault is youth, some wantonness".toLocaleLowerCase(); //'some say thy fault is youth, some wantonness'

//27) String.prototype.toLocaleUpperCase() возвращает значение строки вызова, преобразованное в верхний регистр, в соответствии с любым сопоставлением регистра, зависящим от локали.
"some say thy fault is youth, some wantonness".toLocaleUpperCase(); //'SOME SAY THY FAULT IS YOUTH, SOME WANTONNESS'

//28) String.prototype.toString() строку, представляющую указанный объект
let a = new String("строка-объект");
a.toString(); //'строка-объект'

//29) String.prototype.trim() удаляет пробелы с обоих концов строки и возвращает новую строку не изменяя исходную
"      Some say thy fault is youth, some wantonness  ".trim(); //'Some say thy fault is youth, some wantonness'

// 30) String.prototype.trimEnd() удаляет пробелы только в конце
"      Some say thy fault is youth, some wantonness  ".trimEnd(); //'      Some say thy fault is youth, some wantonness'

//31) String.prototype.trimStart() удаляет пробелы только вначале
"      Some say thy fault is youth, some wantonness  ".trimStart(); //'Some say thy fault is youth, some wantonness  '

// 32) String.prototype.valueOf() возвращает примитивное значение объекта String.
const stringObj = new String("Some say thy fault is youth, some wantonness");
console.log(stringObj); //String {'Some say thy fault is youth, some wantonness'}
console.log(stringObj.valueOf()); //Some say thy fault is youth, some wantonness

//

// УСТАРЕЛИ
//  String.prototype.big()  встраивает строку в html тег <big>: <big>str</big>" (можно использовать для изменения размера строки)
// String.prototype.small()  встраивает строку в html тег <small>: <small>str</small>"(можно использовать для изменения размера строки)
// String.prototype.fontsize()  создает элемент HTML <font>, который заставляет строку отображаться с указанным размером шрифта.

let worldString = "Hello, world";
console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</font>

//  String.prototype.blink() встраивает строку в html тег <blink>: <blink>str</blink>" (для изменения форматирования строки)
// String.prototype.italics() встраивает строку в html тег <i>
let worldString = "Hello, world";

console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>

// String.prototype.bold() создает HTML-элемент <b>, благодаря которому строка отображается полужирным шрифтом.
let worldString = "Hello, world";
console.log(worldString.bold()); // <b>Hello, world</b>

// String.prototype.link()
// String.prototype.anchor() - устарел  - создаёт якорный HTML-элемент <a>, используемый в качестве цели гиперссылки.
let myString = "Оглавление";
cument.body.innerHTML = myString.anchor("contents_anchor");
// приведёт к выводу следующего HTML:
<a name="contents_anchor">Оглавление</a>;

// String.prototype.fixed() создает HTML-элемент <tt>, который заставляет строку отображаться шрифтом с фиксированным шагом.
let worldString = "Hello, world";
console.log(worldString.fixed()); // "<tt>Hello, world</tt>"

// String.prototype.fontcolor() создает элемент HTML <font>, который вызывает отображение строки с указанным цветом шрифта.
let worldString = "text";
console.log(worldString.fontcolor("green")); // <font color="green">text</font>

//String.prototype.strike()
//String.prototype.sub();
//String.prototype.substr()
//String.prototype.sup()
//String.prototype.toSource()

2;
const string = "https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/";
let firstSlashIndex = string.indexOf("/");
let domenEndSlashIndex = string.indexOf("/", firstSlashIndex + 2);

const domen = string.slice(0, domenEndSlashIndex);
console.log("domen", domen); //https://inc4.net

const articleURL = string
  .slice(domenEndSlashIndex + 1, string.length - 1)
  .split("-");
const normalizedWordsArr = articleURL.map(
  (word) => word[0].toUpperCase() + word.slice(1, word.length)
);

const normalizedArticleName = normalizedWordsArr.join(" ");
console.log("normalizedArticleName", normalizedArticleName); //What Can Cedefi Bring To The Crypto Industry

// 3. Задание 3
