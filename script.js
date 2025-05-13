function contarLinks() {
  let links = document.getElementsByTagName("a");
  for (i = 0; i < links.length; i++) {
    console.log(`${i + 1}.${links[i]}`);
  }
}

function penultimoLink() {
  let links = document.getElementsByTagName("a");
  console.log(links[links.length - 2]);
}

function twitterLink() {
  let linkTwitter = document.querySelectorAll('a[href*="twitter.com"]');
  for (i = 0; i < linkTwitter.length; i++) {
    console.log(`${i + 1}.${linkTwitter[i]}`);
  }
}

function ultimosLinks() {
  let paragrafos = document.getElementsByTagName("p");
  let ultimoParagrafo = paragrafos[paragrafos.length - 1];
  let linkUltimoParagrafo = ultimoParagrafo.getElementsByTagName("a");
  for (i = 0; i < linkUltimoParagrafo.length; i++) {
    console.log(`${i + 1}.${linkUltimoParagrafo[i]}`);
  }
}
