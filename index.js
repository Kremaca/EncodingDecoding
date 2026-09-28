const words = {
  "4": {
    "data": "64 61 74 61",
    "disk": "64 69 73 6B",
    "byte": "62 79 74 65",
    "port": "70 6F 72 74",
    "ping": "70 69 6E 67",
    "WiFi": "57 69 46 69",
    "Java": "4A 61 76 61",
    "JSON": "4A 53 4F 4E",
    "HTTP": "48 54 54 50",
    "HTML": "48 54 4D 4C",
    "HDMI": "48 44 4D 49",
    "BIOS": "42 49 4F 53",
    "spam": "73 70 61 6D",
    "graf": "67 72 61 66",
    "font": "66 6F 6E 74",
    "link": "6C 69 6E 6B",
    "IPv4": "49 50 76 34",
    "7zip": "37 7A 69 70",
    "WLAN": "57 4C 41 4E",
    "ASUS": "41 53 55 53"
  },
  "5": {
    "zdroj": "7A 64 72 6F 6A",
    "modem": "6D 6F 64 65 6D",
    "USB-C": "55 53 42 2D 43",
    "cloud": "63 6C 6F 75 64",
    "virus": "76 69 72 75 73",
    "heslo": "68 65 73 6C 6F",
    "cache": "63 61 63 68 65",
    "Linux": "4C 69 6E 75 78",
    "Apple": "41 70 70 6C 65",
    "Intel": "49 6E 74 65 6C",
    "H.265": "48 2E 32 36 35",
    "FAT32": "46 41 54 33 32",
    "admin": "61 64 6d 69 6E",
    "odkaz": "6F 64 6B 61 7A",
    "Unity": "55 6E 69 74 79",
    "pixel": "70 69 78 65 6C",
    "ASCII": "41 53 43 49 49",
    "kanal": "6B 61 6E 61 6C",
    "login": "6C 6F 67 69 6E",
    "jadro": "6A 61 64 72 6F"
  },
  "6": {
    "soubor": "73 6F 75 62 6F 72",
    "server": "73 65 72 76 65 72",
    "klient": "6B 6C 69 65 6E 74",
    "proces": "70 72 6F 63 65 73",
    "system": "73 79 73 74 65 6D",
    "router": "72 6F 75 74 65 72",
    "NVIDIA": "4E 56 49 44 49 41",
    "cookie": "63 6F 6F 6B 69 65",
    "e-mail": "65 2D 6D 61 69 6C",
    "Google": "47 6F 6F 67 6C 65",
    "signal": "73 69 67 6E 61 6C",
    "senzor": "73 65 6E 7A 6F 72",
    "slozka": "73 6C 6F 7A 6B 61",
    "plugin": "70 6C 75 67 69 6E",
    "update": "75 70 64 61 74 65",
    "Xiaomi": "58 69 61 6F 6D 69",
    "zaloha": "7A 61 6C 6F 68 61",
    "TCP/IP": "54 43 50 2F 49 50",
    "QWERTY": "51 57 45 52 54 59",
    "Python": "50 79 74 68 6F 6E"
  },
  "7": {
    "monitor": "6D 6F 6E 69 74 6F 72",
    "program": "70 72 6F 67 72 61 6D",
    "pocitac": "70 6F 63 69 74 61 63",
    "Android": "41 6E 64 72 6F 69 64",
    "malware": "6D 61 6C 77 61 72 65",
    "Windows": "57 69 6E 64 6f 77 73",
    "backend": "62 61 63 6B 65 6E 64",
    "Blender": "42 6C 65 6E 64 65 72",
    "restart": "72 65 73 74 61 72 74",
    "Samsung": "53 61 6D 73 75 6E 67",
    "ISO/OSI": "49 53 4F 2F 4F 53 49",
    "binarka": "62 69 6E 61 72 6B 61",
    "iterace": "69 74 65 72 61 63 65",
    "rekurze": "72 65 6B 75 72 7A 65",
    "textura": "74 65 78 74 75 72 61",
    "emulace": "65 6D 75 6C 61 63 65",
    "SHA-256": "53 48 41 2D 32 35 36",
    "P vs NP": "50 20 76 73 20 4E 50",
    "Arduino": "41 72 64 75 69 6E 6F",
    "adapter": "61 64 61 70 74 65 72"
  },
  "8": {
    "hardware": "68 61 72 64 77 61 72 65",
    "software": "73 6F 66 74 77 61 72 65",
    "terminal": "74 65 72 6D 69 6E 61 6C",
    "databaze": "64 61 74 61 62 61 7A 65",
    "internet": "69 6E 74 65 72 6E 65 74",
    "aplikace": "61 70 6C 69 6B 61 63 65",
    "procesor": "70 72 6F 63 65 73 6F 72",
    "komprese": "6B 6F 6D 70 72 65 73 65",
    "Ethernet": "45 74 68 65 72 6E 65 74",
    "firewall": "66 69 72 65 77 61 6C 6C",
    "mikrofon": "6D 69 6B 72 6F 66 6F 6E",
    "kodovani": "6B 6F 64 6F 76 61 6E 69",
    "protokol": "70 72 6F 74 6F 6B 6F 6C",
    "instance": "69 6E 73 74 61 6E 63 65",
    "rozhrani": "72 6F 7A 68 72 61 6E 69",
    "Alphabet": "41 6C 70 68 61 62 65 74",
    "sbernice": "73 62 65 72 6E 69 63 65",
    "uloziste": "75 6C 6F 7A 69 73 74 65",
    "3D model": "33 44 20 6D 6F 64 65 6C",
    "promenna": "70 72 6F 6D 65 6E 6E 61"
  }
}

let decodeWords = {}
let encodeWords = {}
let solvedWords = {}
let currentWord = {}

let currentMode;
let currentLength = 4;
let wordsShown = false;
let wordCounter = 0;

function setup() {
  manageSessionStorage();
  changeMode(undefined, true);
}

function changeMode(mode = "decode", init) {
  if (currentMode != mode) {
    currentMode = mode;
    nextWord();
    showWords(false, init);
  }
  if (!init) {
    getHTML("mode-encode").classList.toggle("mode-button-active");
    getHTML("mode-decode").classList.toggle("mode-button-active");
  }
}

function changeWordLength() {
  slider = getHTML("word-length");
  currentLength = slider.value;
  perc = Math.round(((slider.value-4)/(slider.max-4))*100);
  slider.style.background = `linear-gradient(to right, mediumseagreen ${perc}%, rgb(168, 255, 209) ${perc}%, rgb(168, 255, 209) 100%)`;
  getHTML("word-length-counter").innerHTML = currentLength;
  nextWord();
}

function nextWord() {
  getHTML("word-input").value = "";
  let modifyWords = (currentMode == "decode" ? decodeWords : encodeWords)[currentLength.toString()];

  if (Object.values(modifyWords).length) {
    let wordIndexer = Object.keys(modifyWords);
    let nextKey = Object.keys(currentWord)[0] ?? "";

    do {
      nextKey = wordIndexer[Math.floor(Math.random() * wordIndexer.length)];
    } while(nextKey == Object.keys(currentWord)[0] && Object.values(modifyWords).length > 1)

    currentWord = {[nextKey]: modifyWords[nextKey]};
    getHTML("word-chosen").innerHTML = currentMode == "decode" ? currentWord[nextKey] : Object.keys(currentWord)[0];
  }
  else {
    getHTML("word-chosen").innerHTML = "Všechna slova o vybrané délce byla vyřešena!";
  }
}

function checkWord() {
  let userWord = getHTML("word-input").value;
  let isCorrect = (currentMode == "decode") ? userWord == Object.keys(currentWord)[0] : userWord.toUpperCase() == Object.values(currentWord)[0];
  if (isCorrect) {
    solvedWords[currentMode].push(currentMode == "decode" ? Object.keys(currentWord)[0] : Object.values(currentWord)[0]);
    delete (currentMode == "decode" ? decodeWords : encodeWords)[currentLength.toString()][Object.keys(currentWord)[0]];
    wordCounter++;
    getHTML("word-counter").innerHTML = wordCounter;
    nextWord();
    showWords(wordsShown);
    manageSessionStorage(true);
  }
  setInputStyle(isCorrect);
}

function showWords(show, init) {
  wordsShown = show ?? !wordsShown;
  getHTML("words-solved").style.display = wordsShown ? "block" : "none";
  getHTML("solved-decoded").innerHTML = solvedWords["decode"].length ? solvedWords["decode"].join("<br>") : "Zatím nic";
  getHTML("solved-encoded").innerHTML = solvedWords["encode"].length ? solvedWords["encode"].join("<br>") : "Zatím nic";
  if (!init) {
    if (wordsShown) getHTML("word-history").classList.add("list-button-active")
    else getHTML("word-history").classList.remove("list-button-active")
  }
}

function setInputStyle(isCorrect) {
  let inp = getHTML("word-input");
  let cStyle = isCorrect ? "correct-word" : "incorrect-word";
  inp.classList.toggle(cStyle);
  if (isCorrect) inp.placeholder = "Správně!";
  setTimeout(_ => {
    inp.classList.toggle(cStyle);
    inp.placeholder = "Tvoje řešení";
  }, 1500)
}

function manageSessionStorage(save) {
  if (save) {
    sessionStorage.setItem("decodeWords", JSON.stringify(decodeWords));
    sessionStorage.setItem("encodeWords", JSON.stringify(encodeWords));
    sessionStorage.setItem("solvedWords", JSON.stringify(solvedWords));
  }
  else {
    decodeWords = JSON.parse(sessionStorage.getItem("decodeWords")) ?? structuredClone(words);
    encodeWords = JSON.parse(sessionStorage.getItem("encodeWords")) ?? structuredClone(words);
    solvedWords = JSON.parse(sessionStorage.getItem("solvedWords")) ?? {decode: [], encode: []};
    wordCounter = solvedWords.decode.length + solvedWords.encode.length;
    setTimeout(_ => {
      getHTML("word-counter").innerHTML = wordCounter;
    });
  }
}

function getHTML(id) {
  return document.getElementById(id);
}