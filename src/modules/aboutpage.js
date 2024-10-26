export function createAboutPage () {
    const content = document.createElement("div");
    const aboutHeader = document.createElement("h2");
    const aboutPar1 = document.createElement("p");
    const aboutPar2 = document.createElement("p");
    const aboutPar3 = document.createElement("p");
    const link = document.createElement("a");

    content.id = "content";

    aboutHeader.textContent = "About theFood";
    aboutPar1.textContent = "theFood started off as just another place to grab a bite. No grand opening, no big story behind it—just there. A couple of folks decided to throw it all together and see what happened."
    aboutPar2.textContent = "People started showing up, curious about the ̵̞͈̂͋͂͜ ̵̦̫̍̉ ̷̬̯̒̒ ̷̨͚̣̿a̶͎͍̟͐ ̸̣͠a̶͚̻̲͋͐͝ dishes that seemed to pop up on the menu. Why? Who knows? But here we are, serving theFood, for whoever comes by. People just walk in and walk out, no questions asked."
    aboutPar3.textContent = "Some say ";
    link.textContent = "he";
    link.href = "https://github.com/veryvroosh"
    link.target = "_blank"

    aboutPar3.appendChild(link);
    aboutPar3.append(" knows a little about the origin.");

    document.body.appendChild(content);
    content.appendChild(aboutHeader);
    content.appendChild(aboutPar1);
    content.appendChild(aboutPar2);
    content.appendChild(aboutPar3);
}