export function createHomePage () {

    const content = document.createElement("div");
    const homeHeader = document.createElement("h2");
    const homePar1 = document.createElement("p");
    const homePar2 = document.createElement("p");

    content.id = "content";

    homeHeader.textContent = "What to expect in theFood"
    homePar1.textContent = "Here at theFood, we're a professional environment with multiple health certificates. You can expect the best of the best quality foods ranging from P̴̡̜̎͑̀į̶̝̖̽̈́̚ż̷̧̺̦̻̕z̸͉̑̇̉̈a̶͕̲̳͝ to  ̷̬̣̗͎̗̊͒̌̍ ̴̝̠̜̄̃͠͝ ̸̰͔̻͛̋̂̽͝ ̴͐͊͒        ͔. Check out the menu and the about page for more information!";
    homePar2.textContent = "Step into theFood, where we don’t just serve dishes—we serve  ̶̺̫̬͇͚́̈̂ ̸͈͈͒̕ͅ ̵̞̼͊́̀͠x̸̪̩̘̾ ̷̝̜̝̊x̴̱̠̦̗̏p̵̝̬̜̮̠͑̂̈̽̃e̴̝̥̱̒̌ȓ̶̢̡̟̟̋. Every item’s designed to bring a little mystery and thrill to your plate, made with the highest standards of quality and care. So whether you’re here for a bite of our signature creations or just a glimpse into the ụ̶͗̉n̸̢̈́͂u̷͙͛̏s̵̛̺̒ŭ̸̳̹ạ̵̥͘l̵̨͉̅, we’ve got something for everyone."

    document.body.appendChild(content);
    content.appendChild(homeHeader);
    content.appendChild(homePar1);
    content.appendChild(homePar2);
}